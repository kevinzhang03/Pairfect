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
        <div className="bg-yoghurt-500 mx-auto flex min-h-screen max-w-md flex-col px-8 shadow-lg">
          {/* Sticky Header */}
          {/* <header className="bg-blush-200 sticky top-4 z-10 mx-4 -mb-48 h-16 rounded-3xl bg-opacity-50 drop-shadow-xl backdrop-blur-sm"></header> */}
          {/* Main content starts at the top of the header */}
          <main className="grow">{children}</main>
          {/* <footer className="bg-blush-500 h-16 w-full flex-none"></footer> */}
        </div>
      </body>
    </html>
  );
}
