import { type ReactNode } from 'react';
import { Navbar } from './components/navbar';

type DashboardLayoutProps = {
  children: ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className='h-screen bg-gray-100'>
      <Navbar />

      <div>{children}</div>
    </main>
  );
}
