import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

const font = Figtree({ subsets: ['latin'] });

import Sidebar from '@/components/Sidebar';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToasterProvider from '@/providers/ToasterProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';

export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to your favorite music!',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const songs = await getSongsByUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={songs}>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
