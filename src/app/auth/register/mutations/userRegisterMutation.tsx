import { useMutation } from '@tanstack/react-query';
import {
  type RegisterResponse,
  type RegisterPayload,
} from '~/app/api/auth/register/route';
import {
  type UpdateUserPayload,
  type UpdateUserResponse,
} from '~/app/api/user/route';
import { api } from '~/lib/api';
import { useUploadThing } from '~/lib/uploadthing';

export function useRegisterMutation() {
  // TODO: extract image uploading to its own custom hook
  const { startUpload } = useUploadThing('imageUploader');

  const uploadProfileImageMutation = useMutation({
    mutationFn: async (payload: { imageFile: File[] }) =>
      await startUpload(payload.imageFile),
  });

  const updateUserMutation = useMutation({
    mutationFn: async (payload: UpdateUserPayload) => {
      await api.put<UpdateUserResponse>('/user', payload);
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (payload: RegisterPayload) =>
      await api.post<RegisterResponse>('/auth/register', payload),
  });

  return {
    registerMutation,
    uploadProfileImageMutation,
    updateUserMutation,
  };
}
