import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';
import '../styles/global.css';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => toast(`${error}`),
  }),
});

function Featureloop({ Component, pageProps: { session, ...pageProps } }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Featureloop;
