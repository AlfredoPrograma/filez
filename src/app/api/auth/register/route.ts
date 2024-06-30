import { StatusCodes } from 'http-status-codes';
import { type NextRequest } from 'next/server';
import * as bcrypt from 'bcrypt';
import { z } from 'zod';
import { db } from '~/server/db';
import { env } from '~/env';

const registerSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  image: z.string(), // TODO: add `.url()` validation once S3 bucket uploading is done
});

export async function POST(req: NextRequest) {
  const body = (await req.json()) as unknown;
  const payload = registerSchema.parse(body);

  const userExists = await db.user.findUnique({
    where: { email: payload.email },
  });

  if (userExists) {
    return Response.json(
      {
        error: 'Email already registered',
      },
      {
        status: StatusCodes.UNPROCESSABLE_ENTITY,
      },
    );
  }

  const hashedPassword = await bcrypt.hash(
    payload.password,
    env.PASSWORD_HASH_ROUNDS,
  );

  await db.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      image: payload.image,
    },
  });

  return Response.json(
    {
      message: 'User registered successfully',
    },
    {
      status: StatusCodes.CREATED,
    },
  );
}
