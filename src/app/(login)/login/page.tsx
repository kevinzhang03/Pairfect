import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import LoginCard from '@/components/LoginCard';

export default async function LoginPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (!error && data?.user) {
    // console.log('user');
    redirect('/');
  }

  return (
    <div className="flex grow flex-col items-center justify-center">
      <LoginCard />
    </div>
  );
}
