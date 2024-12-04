import Sidebar from '@/components/Sidebar';
import PlayerWrapper from '@/components/player/PlayerWrapper';
import { ThemeProvider } from '@/providers/themeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import * as gtag from '@/lib/gtag';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clone YT Music',
  description: 'Clone Youtube Music with Next.js and TailwindCSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      {/* Google tag (gtag.js)  */}
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      ></Script>
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gtag.GA_TRACKING_ID}', { page_path: window.location.pathname });
    `,
        }}
      />
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
          <PlayerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
