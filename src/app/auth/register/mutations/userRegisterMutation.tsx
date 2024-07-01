import { useMutation } from '@tanstack/react-query';
import {
  type RegisterResponse,
  type RegisterPayload,
} from '~/app/api/auth/register/route';
import { api } from '~/lib/api';
import { useUploadThing } from '~/lib/uploadthing';

export function useRegisterMutation() {
  // TODO: extract image uploading to its own custom hook
  const { startUpload } = useUploadThing('imageUploader');

  const uploadProfileImageMutation = useMutation({
    mutationFn: async (payload: { imageFile: File[] }) =>
      await startUpload(payload.imageFile),
  });

  const registerMutation = useMutation({
    mutationFn: async (payload: RegisterPayload) =>
      await api.post<RegisterResponse>('/auth/register', payload),
  });

  return { registerMutation, uploadProfileImageMutation };
}
