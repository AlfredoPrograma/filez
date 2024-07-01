'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AvatarRenderer } from '~/components/avatar-renderer';
import { ImageUploaderField } from '~/components/forms/image-uploader-field';
import { InputField } from '~/components/forms/input-field';
import { Form } from '~/components/ui/form';
import { useRegisterMutation } from '../mutations/userRegisterMutation';
import { type RegisterPayload } from '~/app/api/auth/register/route';
import { LoadingButton } from '~/components/loading-button';

const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
  image: z.instanceof(File).nullable(),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const { registerMutation, uploadProfileImageMutation } =
    useRegisterMutation();
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

  async function onSubmit(formValues: RegisterFormValues) {
    const payload = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    } satisfies RegisterPayload;

    await registerMutation.mutateAsync(payload);

    if (!formValues.image) return;

    const [imageUrl] =
      (await uploadProfileImageMutation.mutateAsync({
        imageFile: [formValues.image],
      })) ?? [];

    console.log(imageUrl);

    // TODO: implement PUT /user/profile endpoint for update user profile data
    // and update its image url field on image upload
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

        <LoadingButton
          type='submit'
          size='lg'
          className='w-full'
          isLoading={
            registerMutation.isPending || uploadProfileImageMutation.isPending
          }
        >
          Create account
        </LoadingButton>
      </form>
    </Form>
  );
}
