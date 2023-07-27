import supabase from '@/lib/supabase';
import { cookies } from 'next/headers';
import { Database } from '@/lib/db_types';

export async function messageListener() {
  
  const channel = supabase
    .channel('any')
    .on('presence', { event: 'sync' }, () => {
      console.log('Presence received!');
    })
    .subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        channel.send({
          type: 'presence',
          event: 'sync',
          payload: { x: Math.random(), y: Math.random() },
        });
      }
    })
    .subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        await channel.track({ online_at: new Date().toISOString() });
      }
    });
  return channel;
}
