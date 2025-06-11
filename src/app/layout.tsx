import '@/styles/globals.css'; 
import { Epilogue } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import ScrollShimmer from '@/components/ScrollShimmer';

const epilogue = Epilogue({ subsets: ['latin'] });

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
      <body className={epilogue.className}>
        <ThemeProvider>
          <ScrollShimmer />
          <Navbar />
          <div className="pt-16">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}