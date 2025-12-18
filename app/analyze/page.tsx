'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { analyzeImage, analyzeSymptoms, AnalysisResult } from '@/lib/data/aiAnalysis';
import { getMedicationsByDisease } from '@/lib/data/medications';
import Card from '@/components/Card';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Upload, FileText, AlertCircle, CheckCircle, Pill, Shield, Stethoscope } from 'lucide-react';

export default function AnalyzePage() {
  const { t, dir } = useLanguage();
  const [activeTab, setActiveTab] = useState<'image' | 'text'>('image');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleImageAnalysis = async () => {
    if (!imagePreview) return;

    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzeImage(imagePreview);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSymptomsAnalysis = async () => {
    if (!symptoms.trim()) return;

    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzeSymptoms(symptoms);
      setResult(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600 bg-green-50 border-green-200';
    if (confidence >= 0.6) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-orange-600 bg-orange-50 border-orange-200';
  };

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 0.8) return t('highConfidence');
    if (confidence >= 0.6) return t('mediumConfidence');
    return t('lowConfidence');
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
          {t('analyze')}
        </h1>
        <p className="text-gray-600 text-lg">
          {dir === 'rtl'
            ? 'قم بتحميل صورة أو وصف الأعراض للحصول على تشخيص فوري'
            : 'Upload an image or describe symptoms for instant diagnosis'}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('image')}
                className={`flex items-center gap-2 pb-4 px-2 font-semibold transition-colors border-b-2 ${
                  activeTab === 'image'
                    ? 'text-primary-600 border-primary-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                <Upload size={20} />
                {t('uploadImage')}
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`flex items-center gap-2 pb-4 px-2 font-semibold transition-colors border-b-2 ${
                  activeTab === 'text'
                    ? 'text-primary-600 border-primary-600'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                <FileText size={20} />
                {t('enterSymptoms')}
              </button>
            </div>

            {activeTab === 'image' ? (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-primary-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {imagePreview ? (
                      <div className="space-y-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-h-64 mx-auto rounded-lg"
                        />
                        <p className="text-sm text-green-600 font-semibold flex items-center gap-2 justify-center">
                          <CheckCircle size={16} />
                          {t('imageUploaded')}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload size={48} className="mx-auto text-gray-400" />
                        <div>
                          <p className="text-lg font-semibold text-gray-700">
                            {t('dragAndDrop')}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            {t('orClickToUpload')}
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>

                <button
                  onClick={handleImageAnalysis}
                  disabled={!imagePreview || isAnalyzing}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <LoadingSpinner size="sm" text={t('analyzing')} />
                  ) : (
                    t('analyzeNow')
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('symptoms')}
                  </label>
                  <textarea
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    className="input-field min-h-[200px] resize-none"
                    placeholder={t('describeSymptoms')}
                    dir={dir}
                  />
                </div>

                <button
                  onClick={handleSymptomsAnalysis}
                  disabled={!symptoms.trim() || isAnalyzing}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <LoadingSpinner size="sm" text={t('analyzing')} />
                  ) : (
                    t('analyzeNow')
                  )}
                </button>
              </div>
            )}
          </Card>

          {result && (
            <Card className="p-6 mt-8 animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <AlertCircle size={24} className="text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t('results')}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {new Date(result.analysisDate).toLocaleString(dir === 'rtl' ? 'ar-SA' : 'en-US')}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {dir === 'rtl' ? result.disease.nameAr : result.disease.nameEn}
                    </h3>
                    <div className={`px-4 py-2 rounded-full font-semibold border ${getConfidenceColor(result.disease.confidence)}`}>
                      {Math.round(result.disease.confidence * 100)}% {getConfidenceLabel(result.disease.confidence)}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Pill size={20} className="text-primary-600" />
                      <h4 className="font-semibold text-gray-900">{t('recommendedMedications')}</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {result.disease.medications.slice(0, 3).map((med, idx) => (
                        <li key={idx}>• {med}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={20} className="text-green-600" />
                      <h4 className="font-semibold text-gray-900">{t('prevention')}</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {result.disease.prevention[dir].slice(0, 2).map((tip, idx) => (
                        <li key={idx}>• {tip}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Stethoscope size={20} className="text-orange-600" />
                      <h4 className="font-semibold text-gray-900">{t('consultVet')}</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-700">
                      {result.disease.whenToConsultVet[dir].slice(0, 2).map((when, idx) => (
                        <li key={idx}>• {when}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle size={20} className="text-primary-600" />
              {dir === 'rtl' ? 'معلومات مهمة' : 'Important Information'}
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-primary-600 flex-shrink-0">•</span>
                <span>
                  {dir === 'rtl'
                    ? 'هذا النظام للتشخيص الأولي فقط'
                    : 'This system is for initial diagnosis only'}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 flex-shrink-0">•</span>
                <span>
                  {dir === 'rtl'
                    ? 'استشر طبيباً بيطرياً للتشخيص النهائي'
                    : 'Consult a veterinarian for final diagnosis'}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 flex-shrink-0">•</span>
                <span>
                  {dir === 'rtl'
                    ? 'التصوير الجيد يحسن دقة النتائج'
                    : 'Good photography improves result accuracy'}
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-600 flex-shrink-0">•</span>
                <span>
                  {dir === 'rtl'
                    ? 'قدم أكبر قدر من التفاصيل عن الأعراض'
                    : 'Provide as much symptom detail as possible'}
                </span>
              </li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary-50 to-medical-50">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {dir === 'rtl' ? 'نصيحة احترافية' : 'Pro Tip'}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {dir === 'rtl'
                ? 'للحصول على أفضل النتائج، التقط صوراً واضحة في إضاءة جيدة وركز على المناطق المصابة. قدم معلومات مفصلة عن الأعراض والسلوك.'
                : 'For best results, take clear photos in good lighting and focus on affected areas. Provide detailed information about symptoms and behavior.'}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
