import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

const queryClient = new QueryClient();

function Featureloop({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Featureloop;
