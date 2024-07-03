'use client';

import { Button } from '~/components/ui/button';
import { signOut } from 'next-auth/react';

export function Navbar() {
  return (
    <header>
      <nav>
        <Button
          variant='destructive'
          onClick={() => signOut()}
        >
          Logout
        </Button>
      </nav>
    </header>
  );
}
