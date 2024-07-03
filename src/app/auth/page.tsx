import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { AuthenticationMethods } from './components/authentication-methods';
import { getServerAuthSession } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function AuthPage() {
  const session = await getServerAuthSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className='flex h-screen items-center justify-center bg-gray-100'>
      <Card>
        <CardHeader>
          <CardTitle>Filez</CardTitle>
        </CardHeader>

        <CardContent>
          <AuthenticationMethods />
        </CardContent>
      </Card>
    </main>
  );
}
