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
      <body className="bg-gray-500">
        <div className="mx-auto flex min-h-screen max-w-md flex-col bg-yoghurt-500 px-8 py-24 shadow-lg">
          <main className="flex grow flex-col">{children}</main>
        </div>
      </body>
    </html>
  );
}
