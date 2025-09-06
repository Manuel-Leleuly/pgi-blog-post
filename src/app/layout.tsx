import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import { ProgressAppProvider } from '@/providers/ProgressProvider';
import { QueryProvider } from '@/providers/QueryProvider';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PGI Blog Post',
  description: 'Technical Test for PGI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.className, 'antialiased')}>
        <ProgressAppProvider>
          <QueryProvider>
            {children}
            <Toaster
              position="top-right"
              closeButton
              richColors
              theme="light"
            />
          </QueryProvider>
        </ProgressAppProvider>
      </body>
    </html>
  );
}
