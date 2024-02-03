import { HeadNext } from "@/client/components/HeadNext";
import { appConfig } from "@/client/config/app";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <HeadNext title={appConfig.name} />
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
