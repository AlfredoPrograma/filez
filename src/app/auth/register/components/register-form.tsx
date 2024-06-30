'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { InputField } from '~/components/forms/input-field';
import { Button } from '~/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      // image: ""
    },
  });

  function onSubmit(formValues: RegisterFormValues) {
    console.log(formValues);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <InputField<RegisterFormValues>
          name='name'
          label='Name'
        />

        <InputField<RegisterFormValues>
          name='email'
          label='Email'
          type='email'
        />

        <InputField<RegisterFormValues>
          name='password'
          label='Password'
          type='password'
        />

        <InputField<RegisterFormValues>
          name='confirmPassword'
          label='Confirm password'
          type='password'
        />

        <Button
          type='submit'
          size='lg'
          className='w-full'
        >
          Create account
        </Button>
      </form>
    </Form>
  );
}
