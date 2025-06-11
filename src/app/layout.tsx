import '@/styles/globals.css'; 
import { Epilogue } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import ScrollShimmer from '@/components/ScrollShimmer';

const epilogue = Epilogue({ subsets: ['latin'] });

export const metadata = {
  title: 'Obsydian – cyfrowa magia',
  description: 'Nowoczesne strony, aplikacje i marketing dla Twojej firmy.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Obsydian',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={epilogue.className}>
        <ThemeProvider>
          <LanguageProvider>
            <ScrollShimmer />
            <Navbar />
            <div className="pt-16">{children}</div>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}