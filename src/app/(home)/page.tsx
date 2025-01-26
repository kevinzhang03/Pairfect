import { createClient } from '@/utils/supabase/server';
import { logout } from '@/utils/actions';
import { redirect } from 'next/navigation';
import Button from '@/components/Button';

export default async function LoginPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    // console.log('no user');
    redirect('/login');
  }

  return (
    <div className="flex grow flex-col items-center justify-center">
      {/* <LoginCard /> */}
      <Button onClick={logout}>hi</Button>
    </div>
  );
}
