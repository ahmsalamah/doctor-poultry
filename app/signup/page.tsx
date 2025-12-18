'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useAuth } from '@/lib/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import { UserPlus, Mail, Lock, User, Phone } from 'lucide-react';

export default function SignupPage() {
  const { t, dir } = useLanguage();
  const { signup } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await signup(formData.name, formData.email, formData.password, formData.phone);
      if (success) {
        router.push('/dashboard');
      } else {
        setError(dir === 'rtl' ? 'فشل إنشاء الحساب' : 'Failed to create account');
      }
    } catch (err) {
      setError(dir === 'rtl' ? 'حدث خطأ. يرجى المحاولة مرة أخرى' : 'An error occurred. Please try again');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary-50 via-white to-medical-50">
      <div className="w-full max-w-md">
        <div className="card p-8 animate-slide-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UserPlus size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              {t('signup')}
            </h1>
            <p className="text-gray-600">
              {dir === 'rtl' ? 'أنشئ حسابك المجاني' : 'Create your free account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('name')}
              </label>
              <div className="relative">
                <User size={20} className="absolute top-3 text-gray-400" style={{ [dir === 'rtl' ? 'right' : 'left']: '0.75rem', [dir === 'rtl' ? 'left' : 'right']: 'auto' }} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                  placeholder={dir === 'rtl' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  required
                  dir={dir}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('email')}
              </label>
              <div className="relative">
                <Mail size={20} className="absolute top-3 text-gray-400" style={{ [dir === 'rtl' ? 'right' : 'left']: '0.75rem', [dir === 'rtl' ? 'left' : 'right']: 'auto' }} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                  placeholder={dir === 'rtl' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  required
                  dir={dir}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t('phone')} {dir === 'rtl' ? '(اختياري)' : '(Optional)'}
              </label>
              <div className="relative">
                <Phone size={20} className="absolute top-3 text-gray-400" style={{ [dir === 'rtl' ? 'right' : 'left']: '0.75rem', [dir === 'rtl' ? 'left' : 'right']: 'auto' }} />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                  placeholder={dir === 'rtl' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                  dir={dir}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t('password')}
              </label>
              <div className="relative">
                <Lock size={20} className="absolute top-3 text-gray-400" style={{ [dir === 'rtl' ? 'right' : 'left']: '0.75rem', [dir === 'rtl' ? 'left' : 'right']: 'auto' }} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`input-field ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                  placeholder={dir === 'rtl' ? 'أدخل كلمة المرور' : 'Enter your password'}
                  required
                  minLength={6}
                  dir={dir}
                />
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  <UserPlus size={20} />
                  {t('signup')}
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {dir === 'rtl' ? 'لديك حساب بالفعل؟' : 'Already have an account?'}{' '}
              <Link href="/login" className="text-primary-600 font-semibold hover:text-primary-700">
                {t('login')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
