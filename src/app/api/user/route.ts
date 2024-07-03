import { StatusCodes } from 'http-status-codes';
import { z } from 'zod';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

const updateUserSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
});

export type UpdateUserPayload = z.infer<typeof updateUserSchema>;
export type UpdateUserResponse = {
  message: string;
};

export async function PUT(req: Request) {
  const session = await getServerAuthSession();

  if (!session) {
    throw Error('User not authenticated');
  }

  const body = (await req.json()) as unknown;
  const payload = updateUserSchema.parse(body);

  await db.user.update({
    where: { id: session.user.id },
    data: {
      name: payload.name,
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
