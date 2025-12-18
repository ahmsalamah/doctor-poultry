'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useAuth } from '@/lib/contexts/AuthContext';
import Link from 'next/link';
import Card from '@/components/Card';
import { 
  ScanSearch, 
  Building2, 
  Pill, 
  TrendingUp,
  Activity,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardPage() {
  const { t, dir } = useLanguage();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const stats = [
    {
      icon: Activity,
      label: t('totalAnalyses'),
      value: '24',
      change: '+12%',
      color: 'text-primary-600',
      bgColor: 'bg-primary-100',
    },
    {
      icon: Building2,
      label: t('activeFarms'),
      value: '3',
      change: '+1',
      color: 'text-medical-600',
      bgColor: 'bg-medical-100',
    },
    {
      icon: TrendingUp,
      label: dir === 'rtl' ? 'معدل النجاح' : 'Success Rate',
      value: '94%',
      change: '+5%',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Calendar,
      label: dir === 'rtl' ? 'هذا الشهر' : 'This Month',
      value: '18',
      change: '+8',
      color: 'text-warning-600',
      bgColor: 'bg-warning-100',
    },
  ];

  const quickActions = [
    {
      icon: ScanSearch,
      label: t('newAnalysis'),
      description: dir === 'rtl' ? 'تحليل مرض جديد' : 'Analyze new disease',
      link: '/analyze',
      color: 'bg-primary-600',
    },
    {
      icon: Building2,
      label: t('viewAllFarms'),
      description: dir === 'rtl' ? 'إدارة المزارع' : 'Manage farms',
      link: '/farms',
      color: 'bg-medical-600',
    },
    {
      icon: Pill,
      label: t('browseMedications'),
      description: dir === 'rtl' ? 'استعرض قاعدة بيانات الأدوية' : 'Browse medication database',
      link: '/medications',
      color: 'bg-green-600',
    },
  ];

  const recentAnalyses = [
    {
      disease: dir === 'rtl' ? 'مرض نيوكاسل' : 'Newcastle Disease',
      date: '2024-12-15',
      confidence: 92,
      status: 'high',
    },
    {
      disease: dir === 'rtl' ? 'الكوكسيديا' : 'Coccidiosis',
      date: '2024-12-14',
      confidence: 78,
      status: 'medium',
    },
    {
      disease: dir === 'rtl' ? 'جدري الدجاج' : 'Fowl Pox',
      date: '2024-12-13',
      confidence: 85,
      status: 'high',
    },
  ];

  return (
    <div className="page-container animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
          {t('welcome')}, {user.name}!
        </h1>
        <p className="text-gray-600 text-lg">
          {dir === 'rtl' 
            ? 'نظرة عامة على نشاطاتك وإحصائياتك'
            : 'Overview of your activities and statistics'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <Icon size={24} className={stat.color} />
                </div>
                <span className="text-sm font-semibold text-green-600 flex items-center gap-1">
                  <ArrowUpRight size={16} />
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            {t('recentAnalyses')}
          </h2>
          <Card className="p-6">
            <div className="space-y-4">
              {recentAnalyses.map((analysis, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {analysis.disease}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {new Date(analysis.date).toLocaleDateString(dir === 'rtl' ? 'ar-SA' : 'en-US')}
                    </p>
                  </div>
                  <div className="text-right" dir={dir}>
                    <div className="text-2xl font-bold text-gray-900">
                      {analysis.confidence}%
                    </div>
                    <div className={`text-xs font-semibold ${
                      analysis.status === 'high' ? 'text-green-600' : 'text-yellow-600'
                    }`}>
                      {analysis.status === 'high' ? t('highConfidence') : t('mediumConfidence')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/analyze"
              className="block mt-6 text-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              {dir === 'rtl' ? 'عرض جميع التحاليل' : 'View all analyses'} →
            </Link>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            {t('quickActions')}
          </h2>
          <div className="space-y-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link key={index} href={action.link}>
                  <Card className="p-6 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                          {action.label}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
