import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { LoginForm } from './components/login-form';

export default function LoginPage() {
  return (
    <main className='flex h-screen items-center justify-center bg-gray-100'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Filez</CardTitle>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
