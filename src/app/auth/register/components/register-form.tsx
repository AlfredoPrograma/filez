'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AvatarRenderer } from '~/components/avatar-renderer';
import { ImageUploaderField } from '~/components/forms/image-uploader-field';
import { InputField } from '~/components/forms/input-field';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import { Form } from '~/components/ui/form';

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
  image: z.instanceof(File).nullable(),
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
      image: null,
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
        <ImageUploaderField<RegisterFormValues>
          name='image'
          avatarRenderer={({ openFileSelector, previewSrc }) => (
            <AvatarRenderer
              openFileSelector={openFileSelector}
              previewSrc={previewSrc}
            />
          )}
        />

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
