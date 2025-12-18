'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { getAllResources, getResourcesByCategory, Resource } from '@/lib/data/resources';
import Card from '@/components/Card';
import { BookOpen, Shield, Pill, Leaf, Lock, Settings, Clock } from 'lucide-react';

export default function ResourcesPage() {
  const { t, dir } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<Resource['category'] | 'all'>('all');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  
  const allResources = getAllResources();
  const displayedResources = selectedCategory === 'all'
    ? allResources
    : getResourcesByCategory(selectedCategory);

  const categories = [
    { value: 'all', label: dir === 'rtl' ? 'الكل' : 'All', icon: BookOpen },
    { value: 'prevention', label: t('prevention'), icon: Shield },
    { value: 'treatment', label: dir === 'rtl' ? 'العلاج' : 'Treatment', icon: Pill },
    { value: 'nutrition', label: dir === 'rtl' ? 'التغذية' : 'Nutrition', icon: Leaf },
    { value: 'biosecurity', label: dir === 'rtl' ? 'الأمن الحيوي' : 'Biosecurity', icon: Lock },
    { value: 'management', label: dir === 'rtl' ? 'الإدارة' : 'Management', icon: Settings },
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.icon : BookOpen;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'prevention':
        return 'bg-green-100 text-green-700';
      case 'treatment':
        return 'bg-blue-100 text-blue-700';
      case 'nutrition':
        return 'bg-yellow-100 text-yellow-700';
      case 'biosecurity':
        return 'bg-purple-100 text-purple-700';
      case 'management':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
          {t('educationalResources')}
        </h1>
        <p className="text-gray-600 text-lg">
          {dir === 'rtl'
            ? 'تعلم كيفية إدارة وحماية قطيعك بشكل أفضل'
            : 'Learn how to better manage and protect your flock'}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value as Resource['category'] | 'all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Icon size={18} />
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {displayedResources.map((resource) => {
              const Icon = getCategoryIcon(resource.category);
              return (
                <Card
                  key={resource.id}
                  className="p-6 cursor-pointer hover:border-primary-300"
                  onClick={() => setSelectedResource(resource)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-primary-600" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {dir === 'rtl' ? resource.titleAr : resource.titleEn}
                        </h3>
                        <span className={`badge ${getCategoryColor(resource.category)} flex-shrink-0`}>
                          {categories.find(c => c.value === resource.category)?.label || resource.category}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                        {dir === 'rtl' ? resource.contentAr : resource.contentEn}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock size={16} />
                          {resource.readTime} {dir === 'rtl' ? 'دقائق' : 'min read'}
                        </div>
                        <button className="text-primary-600 text-sm font-semibold hover:text-primary-700">
                          {t('readMore')} →
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {displayedResources.length === 0 && (
            <Card className="p-12 text-center">
              <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">
                {dir === 'rtl' ? 'لا توجد موارد متاحة' : 'No resources available'}
              </p>
            </Card>
          )}
        </div>

        <div>
          {selectedResource ? (
            <Card className="p-6 sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = getCategoryIcon(selectedResource.category);
                    return <Icon size={24} className="text-primary-600" />;
                  })()}
                </div>
                <div className="flex-1">
                  <span className={`badge ${getCategoryColor(selectedResource.category)}`}>
                    {categories.find(c => c.value === selectedResource.category)?.label || selectedResource.category}
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {dir === 'rtl' ? selectedResource.titleAr : selectedResource.titleEn}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-200">
                <Clock size={16} />
                {selectedResource.readTime} {dir === 'rtl' ? 'دقائق قراءة' : 'minutes read'}
              </div>

              <div className="prose prose-sm max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {dir === 'rtl' ? selectedResource.contentAr : selectedResource.contentEn}
                </p>
              </div>

              {selectedResource.tags.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="text-xs font-semibold text-gray-500 mb-2">
                    {dir === 'rtl' ? 'الكلمات المفتاحية' : 'Tags'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedResource.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedResource(null)}
                className="w-full mt-6 btn-secondary"
              >
                {t('close')}
              </button>
            </Card>
          ) : (
            <Card className="p-6 sticky top-24">
              <div className="text-center">
                <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">
                  {dir === 'rtl'
                    ? 'اختر مورداً لعرض المحتوى الكامل'
                    : 'Select a resource to view full content'}
                </p>
              </div>

              <div className="bg-primary-50 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {dir === 'rtl' ? '💡 نصيحة' : '💡 Tip'}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {dir === 'rtl'
                    ? 'استخدم الفئات أعلاه للعثور على الموارد ذات الصلة بسرعة'
                    : 'Use the categories above to quickly find relevant resources'}
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
