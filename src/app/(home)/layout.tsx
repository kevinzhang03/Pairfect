import type { Metadata } from 'next';
import Navbar from '@/components/nav/Navbar';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'Pairfect',
  description: 'Pairfect',
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <html lang="en">
      <body className="bg-yoghurt-700">
        <div className="relative mx-auto flex min-h-screen max-w-md flex-col bg-yoghurt-500 px-8 py-24 shadow-lg">
          <main className="flex grow flex-col">{children}</main>
          <Navbar className="absolute bottom-4 left-8 right-8" />
        </div>
      </body>
    </html>
  );
}
