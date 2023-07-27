'use server';
import supabase from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function sessionCookieCreate(name: string, value: string, expires: Date) {
  cookies().set({
    name: name,
    value: value,
    expires: expires,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });
}
export async function sessionCookieDelete(name: string) {
  cookies().delete(name);
}

export async function getCookie(name: string) {
  cookies().get(name);
}

export async function createSignedURL(fileName: string) {
  const { data: url, error } = await supabase.storage
    .from('avatars')
    .createSignedUrl(fileName, 60); // 60 seconds expiry
  if (error) {
    console.error(error);
    throw error;
  }

  return url;
}
export async function uploadAvatar(file: File) {
  const signedURL = await createSignedURL(file.name);
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(signedURL.signedUrl, file, {
      cacheControl: '3600',
      upsert: false,
    });
  if (error) {
    console.error(error);
    throw error;
  }
  return data;
}
export async function getSession() {
  sessionStorage.removeItem('supabase.auth.token');
  sessionStorage.removeItem('supabase.auth.expires_at');
  const token = cookies().get('supabase.auth.token');
  const expires_at = cookies().get('supabase.auth.expires_at');
  if (token && expires_at) {
    sessionStorage.setItem('supabase.auth.token', token.value);
    sessionStorage.setItem('supabase.auth.expires_at', expires_at.value);

    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.log(error);
      cookies().delete('supabase.auth.token');
      throw error;
    }
    cookies().set({
      name: 'supabase.auth.token',
      value: data?.session?.access_token || '',
      expires: new Date(data?.session?.expires_at || 0),
      secure: true,
      sameSite: 'strict',
      path: '/',
    });

    sessionStorage.setItem(
      'supabase.auth.token',
      data?.session?.access_token || '',
    );
    sessionStorage.setItem(
      'supabase.auth.expires_at',
      data?.session?.expires_at?.toString() || '',
    );
    return data;
  }

  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.log(error);
    cookies().delete('supabase.auth.token');
    throw error;
  }
  cookies().set({
    name: 'supabase.auth.token',
    value: data?.session?.access_token || '',
    expires: new Date(data?.session?.expires_at || 0),
    secure: true,
    sameSite: 'strict',
    path: '/',
  });

  sessionStorage.setItem(
    'supabase.auth.token',
    data?.session?.access_token || '',
  );
  sessionStorage.setItem(
    'supabase.auth.expires_at',
    data?.session?.expires_at?.toString() || '',
  );
  return data;
}
export async function setSession(session: Session) {
  sessionStorage.setItem('supabase.auth.token', session.access_token);
  sessionStorage.setItem(
    'supabase.auth.expires_at',
    session.expires_at?.toString() || '',
  );
}
export async function refreshSession() {
  const { data, error } = await supabase.auth.refreshSession();
  const { session, user } = data;

  if (error) {
    console.log(error);
    throw error;
  }

  return { session, user };
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function getStates() {
  const { data: states, error } = await supabase.from('states').select('*');
  if (error) {
    console.log(error);
    throw error;
  }
  return states;
}

export async function getCountries() {
  const { data: countries, error } = await supabase
    .from('countries')
    .select('*');
  if (error) {
    console.log(error);
    throw error;
  }
  return countries;
}

export async function updateUserProfile(
  userId: string,
  first_name: string,
  last_name: string,
  phone: string | null,
  street: string | null,
  city: string | null,
  state: string | null,
  postal_code: string | null,
  country: string | null,
  avatar: string | null,
) {
  const { data: profile, error } = await supabase
    .from('profile')
    .update({
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      street: street,
      city: city,
      state: state,
      postal_code: postal_code,
      country: country,
      avatar: avatar,
    })
    .eq('id', userId);
  if (error) {
    console.log(error);
    throw error;
  }
  return profile;
}

export async function PasswordLogin(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}

export async function GithubLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}

export async function GoogleLogin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}

export async function ResetPassword(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}

export async function Signup(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}

export async function Logout() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserProfile(userId: string) {
  const { data: profile, error } = await supabase
    .from('profile')
    .select('*')
    .eq('id', userId);
  if (error) {
    console.log(error);
    throw error;
  }
  return profile;
}

export async function setTheme() {
  cookies().set({
    name: 'theme',
    value: 'dark',
    expires: Date.now() + 1000 * 60 * 60 * 24 * 1,
    secure: true,
  });
}

export async function createCategory(name: string, userId: string) {
  const { data: category, error } = await supabase
    .from('categories')
    .insert([{ name: name, user_id: userId }]);
  if (error) {
    console.log(error);
    throw error;
  }
  return category;
}

export async function getTasksCount(userId: string) {
  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('id')
    .eq('user_id', userId);
  if (error) {
    console.log(error);
    throw error;
  }
  return tasks;
}
export async function getTasks(userId: string) {
  const { data: tasks, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId);
  if (error) {
    console.log(error);
    throw error;
  }
  return tasks;
}

export async function getTask(id: number) {
  const { data: task, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }
  return task;
}


async function uploadFile(file: File) {
  const { data, error } = await supabase.storage.from('bucket_name').upload('file_path', file)
  if (error) {
    // Handle error
  } else {
    // Handle success
  }
}