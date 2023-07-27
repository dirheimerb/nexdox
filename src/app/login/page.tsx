import supabase from '@/lib/supabase';
import { redirect } from 'next/navigation';
import Login from '@/components/auth/Login';

export default async function LoginPage() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // React.useEffect(() => {
  //   if(session) {
  //     sessionStorage.setItem('supabase.auth.token', session?.access_token ?? '');
  //     redirect('/dashboard');
  //   } else {
  //     sessionStorage.removeItem('supabase.auth.token');
  //   }
  // }, [session]);

  if (session) {
    redirect('/dashboard');
  }

  return <Login />;
}
