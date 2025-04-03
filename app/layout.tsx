import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const publicSans = Public_Sans({ subsets: ['latin'] });

const histora = localFont({
  src: [
    {
      path: '../public/fonts/HistoraBeralin.otf',
    },
  ],
  variable: '--font-histora',
});

export const metadata: Metadata = {
  title: 'Boys Quarters Africa',
  description:
    'Boys Quarters Africa is a movement resolved to educate, empower & advocate for a new tribe of boys who will deliberately & purposefully transition from boyhood to manhood.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${publicSans.className} ${histora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
