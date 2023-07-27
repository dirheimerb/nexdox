'use client';
import React from 'react';
import AuthProvider from './AuthContext';
import ThemeProvider from './ThemeContext';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  );
}
