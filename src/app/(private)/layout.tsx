import { redirect } from 'next/navigation';
import { type ReactNode } from 'react';
import { getServerAuthSession } from '~/server/auth';

type PrivateLayoutProps = {
  children: ReactNode;
};

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect('/auth');
  }

  return children;
}
