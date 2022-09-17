import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import 'tailwindcss/tailwind.css';

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import '../styles/global.css';

const queryClient = new QueryClient();

function Featureloop({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Featureloop;