import '@/styles/globals.css'; 
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import SmoothScrollHandler from '@/components/SmoothScrollHandler';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Obsydian – cyfrowa magia',
  description: 'Nowoczesne strony, aplikacje i marketing dla Twojej firmy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SmoothScrollHandler>
            <Navbar />
            <div className="pt-16">{children}</div>
            <Footer />
          </SmoothScrollHandler>
        </ThemeProvider>
      </body>
    </html>
  );
}