import { appConfig } from "@/client/config/app";
import Head from "next/head";

export const HeadNext = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key={title} />
      <link
        rel="icon"
        href={appConfig.logoUrl ? appConfig.logoUrl : "/favicon.ico"}
        sizes="any"
      />
    </Head>
  );
};
