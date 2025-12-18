'use client';

import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useAuth } from '@/lib/contexts/AuthContext';
import Link from 'next/link';
import { ScanSearch, Building2, Pill, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const { t, dir } = useLanguage();
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: ScanSearch,
      titleKey: 'analyze',
      description: dir === 'rtl' 
        ? 'تحليل ذكي للأمراض باستخدام الصور والأعراض' 
        : 'Smart disease analysis using images and symptoms',
      link: '/analyze',
    },
    {
      icon: Building2,
      titleKey: 'farms',
      description: dir === 'rtl'
        ? 'إدارة المزارع والمستخدمين بسهولة'
        : 'Easy farm and user management',
      link: '/farms',
    },
    {
      icon: Pill,
      titleKey: 'medications',
      description: dir === 'rtl'
        ? 'قاعدة بيانات شاملة للأدوية والعلاجات'
        : 'Comprehensive medication and treatment database',
      link: '/medications',
    },
    {
      icon: BookOpen,
      titleKey: 'resources',
      description: dir === 'rtl'
        ? 'موارد تعليمية ونصائح للوقاية'
        : 'Educational resources and prevention tips',
      link: '/resources',
    },
  ];

  const benefits = [
    dir === 'rtl' ? 'تشخيص سريع ودقيق' : 'Fast and accurate diagnosis',
    dir === 'rtl' ? 'توصيات علاجية موثوقة' : 'Reliable treatment recommendations',
    dir === 'rtl' ? 'إدارة متعددة المستخدمين' : 'Multi-user management',
    dir === 'rtl' ? 'دعم باللغتين العربية والإنجليزية' : 'Arabic and English support',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-medical-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-medical-300 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              {t('appName')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {t('welcomeMessage')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={isAuthenticated ? '/dashboard' : '/signup'}
                className="btn-primary flex items-center gap-2 text-lg px-8 py-4 shadow-lg hover:shadow-xl"
              >
                {t('getStarted')}
                <ArrowRight size={20} />
              </Link>
              
              <Link
                href="/analyze"
                className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
              >
                {t('analyze')}
                <ScanSearch size={20} />
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 justify-center text-sm md:text-base text-gray-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              {dir === 'rtl' ? 'المميزات الرئيسية' : 'Key Features'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {dir === 'rtl'
                ? 'نظام متكامل لإدارة صحة الدواجن وتشخيص الأمراض'
                : 'Complete system for poultry health management and disease diagnosis'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  href={feature.link}
                  className="card p-6 text-center group hover:border-primary-300 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <Icon size={32} className="text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {dir === 'rtl' ? 'ابدأ الآن مجاناً' : 'Start Now for Free'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {dir === 'rtl'
              ? 'انضم إلى آلاف مربي الدواجن الذين يثقون في نظامنا'
              : 'Join thousands of poultry farmers who trust our system'}
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {t('signup')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
