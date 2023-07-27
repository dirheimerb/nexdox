'use client';
import React from 'react';
import supabase from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function SignOut() {
  const router = useRouter();

  React.useEffect(() => {
    const handleSignOut = async () => await supabase.auth.signOut();
    handleSignOut();
    router.push('/');
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        {/** Create Loading as user is logged out */}
        <h1 className="text-6xl font-bold">Logging Out...</h1>
        <p className="mt-3 text-2xl">
          Redirecting to <a href="/">Home</a>
        </p>
      </main>
    </div>
  );
}
