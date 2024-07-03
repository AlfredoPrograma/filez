import { getServerAuthSession } from '~/server/auth';

export default async function DashboardPage() {
  const session = (await getServerAuthSession())!;

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
    </div>
  );
}
