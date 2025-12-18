'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { useAuth } from '@/lib/contexts/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import { LogIn, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const { t, dir } = useLanguage();
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push('/dashboard');
      } else {
        setError(dir === 'rtl' ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Invalid email or password');
      }
    } catch (err) {
      setError(dir === 'rtl' ? 'حدث خطأ. يرجى المحاولة مرة أخرى' : 'An error occurred. Please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary-50 via-white to-medical-50">
      <div className="w-full max-w-md">
        <div className="card p-8 animate-slide-up">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LogIn size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              {t('login')}
            </h1>
            <p className="text-gray-600">
              {dir === 'rtl' ? 'مرحباً بعودتك!' : 'Welcome back!'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('email')}
              </label>
              <div className="relative">
                <Mail size={20} className="absolute top-3 left-3 text-gray-400" style={{ [dir === 'rtl' ? 'right' : 'left']: '0.75rem', [dir === 'rtl' ? 'left' : 'right']: 'auto' }} />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`input-field ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                  placeholder={dir === 'rtl' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  required
                  dir={dir}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {t('password')}
              </label>
              <div className="relative">
                <Lock size={20} className="absolute top-3 left-3 text-gray-400" style={{ [dir === 'rtl' ? 'right' : 'left']: '0.75rem', [dir === 'rtl' ? 'left' : 'right']: 'auto' }} />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`input-field ${dir === 'rtl' ? 'pr-10' : 'pl-10'}`}
                  placeholder={dir === 'rtl' ? 'أدخل كلمة المرور' : 'Enter your password'}
                  required
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
                  <LogIn size={20} />
                  {t('login')}
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {dir === 'rtl' ? 'ليس لديك حساب؟' : "Don't have an account?"}{' '}
              <Link href="/signup" className="text-primary-600 font-semibold hover:text-primary-700">
                {t('signup')}
              </Link>
            </p>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-xs text-blue-800 text-center">
              {dir === 'rtl' 
                ? '💡 نصيحة: استخدم أي بريد إلكتروني وكلمة مرور لتسجيل الدخول (وضع تجريبي)'
                : '💡 Tip: Use any email and password to login (demo mode)'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
