import type { Metadata } from 'next';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: 'Pairfect',
  description: 'Pairfect',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <div className="mx-auto flex min-h-screen max-w-md flex-col px-8 py-24 shadow-lg bg-cover bg-center" style={{ backgroundImage: 'url(/login-bg.png)' }}>
          <main className="flex grow flex-col p-8 rounded-lg">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
