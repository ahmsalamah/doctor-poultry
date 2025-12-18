'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

const translations: Translations = {
  appName: {
    ar: 'دكتور دواجن',
    en: 'Doctor Poultry',
  },
  home: {
    ar: 'الرئيسية',
    en: 'Home',
  },
  dashboard: {
    ar: 'لوحة التحكم',
    en: 'Dashboard',
  },
  analyze: {
    ar: 'تحليل',
    en: 'Analyze',
  },
  farms: {
    ar: 'المزارع',
    en: 'Farms',
  },
  medications: {
    ar: 'الأدوية',
    en: 'Medications',
  },
  resources: {
    ar: 'الموارد',
    en: 'Resources',
  },
  login: {
    ar: 'تسجيل الدخول',
    en: 'Login',
  },
  signup: {
    ar: 'إنشاء حساب',
    en: 'Sign Up',
  },
  logout: {
    ar: 'تسجيل الخروج',
    en: 'Logout',
  },
  email: {
    ar: 'البريد الإلكتروني',
    en: 'Email',
  },
  password: {
    ar: 'كلمة المرور',
    en: 'Password',
  },
  name: {
    ar: 'الاسم',
    en: 'Name',
  },
  phone: {
    ar: 'رقم الهاتف',
    en: 'Phone Number',
  },
  welcome: {
    ar: 'مرحباً',
    en: 'Welcome',
  },
  welcomeMessage: {
    ar: 'نظام ذكي لتشخيص أمراض الدواجن',
    en: 'Smart Poultry Disease Diagnosis System',
  },
  getStarted: {
    ar: 'ابدأ الآن',
    en: 'Get Started',
  },
  uploadImage: {
    ar: 'تحميل صورة',
    en: 'Upload Image',
  },
  enterSymptoms: {
    ar: 'أدخل الأعراض',
    en: 'Enter Symptoms',
  },
  analyzeNow: {
    ar: 'تحليل الآن',
    en: 'Analyze Now',
  },
  analysis: {
    ar: 'التحليل',
    en: 'Analysis',
  },
  results: {
    ar: 'النتائج',
    en: 'Results',
  },
  disease: {
    ar: 'المرض',
    en: 'Disease',
  },
  confidence: {
    ar: 'مستوى الثقة',
    en: 'Confidence',
  },
  recommendedMedications: {
    ar: 'الأدوية الموصى بها',
    en: 'Recommended Medications',
  },
  prevention: {
    ar: 'الوقاية',
    en: 'Prevention',
  },
  consultVet: {
    ar: 'استشر طبيب بيطري',
    en: 'Consult a Vet',
  },
  symptoms: {
    ar: 'الأعراض',
    en: 'Symptoms',
  },
  createFarm: {
    ar: 'إنشاء مزرعة',
    en: 'Create Farm',
  },
  farmName: {
    ar: 'اسم المزرعة',
    en: 'Farm Name',
  },
  location: {
    ar: 'الموقع',
    en: 'Location',
  },
  description: {
    ar: 'الوصف',
    en: 'Description',
  },
  myFarms: {
    ar: 'مزارعي',
    en: 'My Farms',
  },
  addUser: {
    ar: 'إضافة مستخدم',
    en: 'Add User',
  },
  role: {
    ar: 'الدور',
    en: 'Role',
  },
  owner: {
    ar: 'مالك',
    en: 'Owner',
  },
  vet: {
    ar: 'طبيب بيطري',
    en: 'Veterinarian',
  },
  worker: {
    ar: 'عامل',
    en: 'Worker',
  },
  history: {
    ar: 'السجل',
    en: 'History',
  },
  date: {
    ar: 'التاريخ',
    en: 'Date',
  },
  status: {
    ar: 'الحالة',
    en: 'Status',
  },
  dosage: {
    ar: 'الجرعة',
    en: 'Dosage',
  },
  usage: {
    ar: 'الاستخدام',
    en: 'Usage',
  },
  warnings: {
    ar: 'التحذيرات',
    en: 'Warnings',
  },
  searchMedications: {
    ar: 'البحث عن الأدوية',
    en: 'Search Medications',
  },
  viewDetails: {
    ar: 'عرض التفاصيل',
    en: 'View Details',
  },
  educationalResources: {
    ar: 'الموارد التعليمية',
    en: 'Educational Resources',
  },
  readMore: {
    ar: 'اقرأ المزيد',
    en: 'Read More',
  },
  save: {
    ar: 'حفظ',
    en: 'Save',
  },
  cancel: {
    ar: 'إلغاء',
    en: 'Cancel',
  },
  delete: {
    ar: 'حذف',
    en: 'Delete',
  },
  edit: {
    ar: 'تعديل',
    en: 'Edit',
  },
  close: {
    ar: 'إغلاق',
    en: 'Close',
  },
  loading: {
    ar: 'جاري التحميل...',
    en: 'Loading...',
  },
  noData: {
    ar: 'لا توجد بيانات',
    en: 'No data available',
  },
  error: {
    ar: 'خطأ',
    en: 'Error',
  },
  success: {
    ar: 'نجح',
    en: 'Success',
  },
  recentAnalyses: {
    ar: 'التحاليل الأخيرة',
    en: 'Recent Analyses',
  },
  totalAnalyses: {
    ar: 'إجمالي التحاليل',
    en: 'Total Analyses',
  },
  activeFarms: {
    ar: 'المزارع النشطة',
    en: 'Active Farms',
  },
  quickActions: {
    ar: 'إجراءات سريعة',
    en: 'Quick Actions',
  },
  newAnalysis: {
    ar: 'تحليل جديد',
    en: 'New Analysis',
  },
  viewAllFarms: {
    ar: 'عرض كل المزارع',
    en: 'View All Farms',
  },
  browseMedications: {
    ar: 'تصفح الأدوية',
    en: 'Browse Medications',
  },
  dragAndDrop: {
    ar: 'اسحب وأفلت الصورة هنا',
    en: 'Drag and drop image here',
  },
  orClickToUpload: {
    ar: 'أو انقر للتحميل',
    en: 'or click to upload',
  },
  describeSymptoms: {
    ar: 'اوصف الأعراض التي تلاحظها...',
    en: 'Describe the symptoms you observe...',
  },
  imageUploaded: {
    ar: 'تم تحميل الصورة',
    en: 'Image Uploaded',
  },
  analyzing: {
    ar: 'جاري التحليل...',
    en: 'Analyzing...',
  },
  highConfidence: {
    ar: 'ثقة عالية',
    en: 'High Confidence',
  },
  mediumConfidence: {
    ar: 'ثقة متوسطة',
    en: 'Medium Confidence',
  },
  lowConfidence: {
    ar: 'ثقة منخفضة',
    en: 'Low Confidence',
  },
  whenToConsultVet: {
    ar: 'متى تستشير الطبيب البيطري',
    en: 'When to Consult a Vet',
  },
  preventionTips: {
    ar: 'نصائح الوقاية',
    en: 'Prevention Tips',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = language;
      document.body.dir = dir;
    }
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
