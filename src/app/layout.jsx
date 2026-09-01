import '@/styles/globals.css';

import { Poppins } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ScrollAnimations } from '@/components/ScrollAnimations';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: {
    template: `%s | Health Sync`,
    default: 'Health Sync',
  },
  description: 'Health Sync',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preload' href='/images/logo.webp' as='image' />
        <link rel='preload' href='/images/laptop.webp' as='image' />
      </head>
      <body
        className={`${poppins.variable} font-poppins bg-white tracking-tight text-gray-900 antialiased`}
      >
        <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
          <ScrollAnimations />
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
