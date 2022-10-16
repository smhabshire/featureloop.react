import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  const router = useRouter();
  const session = useSession();

  return async (variables?: TVariables) => {
    const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.data?.accessToken}`,
        ...options,
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (res.status === 401) {
      router.push('/401');

      return;
    } else if (res.status === 403) {
      router.push('/403');

      return;
    } else if (!res.ok) throw new Error(res.statusText);

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Error…');
    }

    return json.data;
  };
};
