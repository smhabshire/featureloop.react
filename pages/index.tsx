import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const Landing = () => {
  const { data: session } = useSession();

  return (
    <>
      <div>Welcome to what would be the homepage!</div>
      <div>
        You probably wanted the <Link href="/dashboard">dashboard</Link> page
        for now.
      </div>

      <div>
        <h1 className="font-bold">Debug Sessions:</h1>
        <div>Current Environment: {process.env.NODE_ENV}</div>
        {session ? (
          <button onClick={async () => signOut()}>Sign out</button>
        ) : (
          <button onClick={async () => signIn('keycloak')}>Sign in</button>
        )}

        {session && (
          <div>
            <h2 className="font-bold pt-10">Session</h2>
            {JSON.stringify(session)}
          </div>
        )}
      </div>
    </>
  );
};

export default Landing;
