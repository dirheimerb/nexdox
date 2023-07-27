import supabase from '@/lib/supabase';
import ArrowIcon from './ArrowIcon';
import { Database } from '@/lib/db_types';
import { cookies } from 'next/headers';

export interface NewsletterFormProps {
  title: string;
  description: string;
}
export default async function NewsletterForm() {
  const addEmail = async (formData: FormData) => {
    'use server';
    const email = formData.get('email');

    if (email) {
      const stringEmail = email.toString();
      
      const { error } = await supabase
        .from('newsletter')
        .insert({ email: stringEmail });
      if (error) {
        console.error(error);
      }
    }
  };

  return (
    <form
      className="max-w-sm"
      action={addEmail}
    >
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}
