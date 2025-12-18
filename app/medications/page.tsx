'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { getAllMedications, searchMedications, Medication } from '@/lib/data/medications';
import Card from '@/components/Card';
import { Search, Pill, AlertTriangle, Info } from 'lucide-react';

export default function MedicationsPage() {
  const { t, dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const allMedications = getAllMedications();
  
  const displayedMedications = searchQuery
    ? searchMedications(searchQuery)
    : allMedications;

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'vaccine':
        return 'bg-green-100 text-green-700';
      case 'antibiotic':
        return 'bg-blue-100 text-blue-700';
      case 'anticoccidial':
        return 'bg-purple-100 text-purple-700';
      case 'supplement':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
          {t('medications')}
        </h1>
        <p className="text-gray-600 text-lg">
          {dir === 'rtl'
            ? 'قاعدة بيانات شاملة للأدوية البيطرية'
            : 'Comprehensive veterinary medication database'}
        </p>
      </div>

      <div className="mb-6">
        <div className="relative max-w-xl">
          <Search size={20} className="absolute top-3.5 text-gray-400" style={{ [dir === 'rtl' ? 'right' : 'left']: '1rem' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`input-field ${dir === 'rtl' ? 'pr-12' : 'pl-12'}`}
            placeholder={t('searchMedications')}
            dir={dir}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-4">
            {displayedMedications.map((medication) => (
              <Card
                key={medication.id}
                className="p-6 cursor-pointer"
                onClick={() => setSelectedMedication(medication)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Pill size={24} className="text-primary-600" />
                  </div>
                  <span className={`badge ${getCategoryColor(medication.category)}`}>
                    {medication.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {dir === 'rtl' ? medication.nameAr : medication.nameEn}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {dir === 'rtl' ? medication.usage.ar : medication.usage.en}
                </p>

                <button className="text-primary-600 text-sm font-semibold hover:text-primary-700">
                  {t('viewDetails')} →
                </button>
              </Card>
            ))}
          </div>

          {displayedMedications.length === 0 && (
            <Card className="p-12 text-center">
              <Pill size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">
                {dir === 'rtl' ? 'لم يتم العثور على أدوية' : 'No medications found'}
              </p>
            </Card>
          )}
        </div>

        <div>
          {selectedMedication ? (
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Pill size={24} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {dir === 'rtl' ? selectedMedication.nameAr : selectedMedication.nameEn}
                  </h3>
                  <span className={`badge ${getCategoryColor(selectedMedication.category)} mt-1`}>
                    {selectedMedication.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Info size={18} className="text-primary-600" />
                    <h4 className="font-semibold text-gray-900">{t('usage')}</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {dir === 'rtl' ? selectedMedication.usage.ar : selectedMedication.usage.en}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Pill size={18} className="text-primary-600" />
                    <h4 className="font-semibold text-gray-900">{t('dosage')}</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {dir === 'rtl' ? selectedMedication.dosage.ar : selectedMedication.dosage.en}
                  </p>
                </div>

                <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle size={18} className="text-warning-700" />
                    <h4 className="font-semibold text-warning-900">{t('warnings')}</h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedMedication.warnings[dir].map((warning, idx) => (
                      <li key={idx} className="text-sm text-warning-800 flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setSelectedMedication(null)}
                className="w-full mt-4 btn-secondary"
              >
                {t('close')}
              </button>
            </Card>
          ) : (
            <Card className="p-6 sticky top-24 text-center">
              <Pill size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">
                {dir === 'rtl'
                  ? 'اختر دواءً لعرض التفاصيل'
                  : 'Select a medication to view details'}
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
