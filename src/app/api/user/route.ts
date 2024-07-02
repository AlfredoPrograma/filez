import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { db } from '~/server/db';

const updateUserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().optional(),
  password: z.string().optional(),
  image: z.string().optional(),
});

export type UpdateUserPayload = z.infer<typeof updateUserSchema>;
export type UpdateUserResponse = {
  message: string;
};

export async function PUT(req: Request) {
  const body = (await req.json()) as unknown;
  const payload = updateUserSchema.parse(body);

  await db.user.update({
    where: { id: payload.id },
    data: {
      name: payload.name,
      password: payload.password,
      image: payload.image,
    },
  });

  return Response.json(
    {
      message: 'User updated successfully',
    },
    {
      status: StatusCodes.ACCEPTED,
    },
  );
}
