import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { RegisterForm } from './components/register-form';

export default function RegisterPage() {
  return (
    <main className='flex h-screen items-center justify-center bg-gray-100'>
      <Card>
        <CardHeader>
          <CardTitle className='text-center'>Register</CardTitle>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </main>
  );
}
