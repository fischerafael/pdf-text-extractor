import { useRouter } from "next/router";

export const useGetIsPublicPage = () => {
  const { asPath } = useRouter();
  const isPublic = !asPath.includes("/app");
  return isPublic;
};
