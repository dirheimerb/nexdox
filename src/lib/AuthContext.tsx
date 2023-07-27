'use client';
import React from 'react';
import supabase from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

export const SessionContext = React.createContext<Session | null>(null);
export const UserContext = React.createContext<User | null>(null);

export const useAuth = () => {
  const session = React.useContext(SessionContext);
  const user = React.useContext(UserContext);

  if (!session || !user) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return { session, user };
};

interface AuthProviderProps {
  children: React.ReactNode;
}
export default function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = React.useState<Session | null>(null);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const getSession = async () => {
      const { data: session, error } = await supabase.auth.getSession();
      if (error) console.log('Error fetching session: ', error);
      if (session) {
        setSession(session.session);
        setUser(session.session?.user ?? null);
      }
    };

    getSession();
  }, []);

  React.useEffect(() => {
    loadSession();

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
      },
    );

    return () => {
      // Unsubscribe when the component is unmounted
      subscription.subscription.unsubscribe();
    };
  }, []);

  async function loadSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      console.error('Error fetching session: ', error);
      return;
    }

    if (data) {
      setSession(data.session);
      setUser(data.session?.user ?? null);
    }
  }
  return (
    <SessionContext.Provider value={session}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </SessionContext.Provider>
  );
}
