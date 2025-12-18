import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/contexts/LanguageContext';
import { AuthProvider } from '@/lib/contexts/AuthContext';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Doctor Poultry - دكتور دواجن',
  description: 'AI-powered poultry disease diagnosis and management system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <AuthProvider>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <p className="text-sm text-gray-600">
                    © 2024 Doctor Poultry - دكتور دواجن. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
