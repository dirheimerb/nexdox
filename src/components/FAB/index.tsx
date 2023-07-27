'use client';
import React from 'react';
import FAButton from './button';
import { HiPlus, HiSave, HiLogin, HiLogout } from 'react-icons/hi';
import supabase from '@/lib/supabase';


export default function FAB() {
  const [user, setUser] = React.useState<any>('')
  const [hasUser, setHasUser] = React.useState<boolean>(false);
  
  React.useEffect(() => {
  const getUser = async () => {
    const {data: {user}}  = await supabase.auth.getUser();
    if (user) {
      setUser(user)
      setHasUser(true)
  } else {
      setHasUser(false)
      setUser('')
    }
  }
  getUser()
  }, [user])

 const userIcon = hasUser ? <HiLogout /> : <HiLogin />;
 const userLabel = hasUser ? 'Logout' : 'Login';
 const userPath = hasUser ? '/logout' : '/login';
    const FabMenu = [
      {
        id: userLabel,
        label: userLabel,
        icon: userIcon,
        path: userPath,
      },
      {
        id: 'save',
        label: 'Save',
        icon: <HiPlus />,
        path: '/save',
      },
    ];
  return (
    <FAButton
      menuItems={FabMenu}
      fabIcon={<HiPlus />}
    />
  );
}
