'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import '../styles/global.scss';

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Pizzaria',
  description: 'App pizzaria criado no curso de Next JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  )
}
