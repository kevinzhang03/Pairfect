import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

import Question from '@/components/Question';

export default async function LoginPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <div className="flex grow flex-col">
      <Question />
    </div>
  );
}
