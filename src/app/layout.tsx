import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/lib/Providers';
import FAB from '@/components/FAB';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NexDox',
  description: 'NexDox is a documentation site for markdown files.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <FAB />
        </Providers>  
      </body>
    </html>
  );
}
