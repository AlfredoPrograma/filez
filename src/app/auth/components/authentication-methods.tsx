'use client';

import { Button } from '~/components/ui/button';
import { signIn } from 'next-auth/react';

export function AuthenticationMethods() {
  return (
    <section>
      <Button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
        Google
      </Button>
    </section>
  );
}
