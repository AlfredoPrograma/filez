import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { AuthenticationMethods } from './components/authentication-methods';

export default async function AuthPage() {
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
