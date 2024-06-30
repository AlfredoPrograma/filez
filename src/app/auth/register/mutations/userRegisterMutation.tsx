import { useMutation } from '@tanstack/react-query';
import { type RegisterPayload } from '~/app/api/auth/register/route';
import { api } from '~/lib/api';

export function useRegisterMutation() {
  return useMutation({
    mutationFn: async (payload: RegisterPayload) =>
      await api.post('/auth/register', payload),
  });
}
