import { ILink, links, links as lk } from "@/client/config/links";
import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const LinksContainerWithIcons = () => {
  return (
    <C.VStack w="full" align="center" spacing="8">
      {links.pages.map((lk) => (
        <LinkWithIcon lk={lk} />
      ))}
    </C.VStack>
  );
};

export const LinkWithIcon = ({ lk }: { lk: ILink }) => {
  const { asPath } = useRouter();
  const isActive = lk.href.includes(asPath);
  return (
    <NextLink href={lk.href}>
      <C.VStack
        key={lk.href}
        align="center"
        w="full"
        gap="0"
        cursor="pointer"
        color={
          isActive ? `${theme.accentColour}.600` : `${theme.accentColour}.300`
        }
        _hover={{
          color: `${theme.accentColour}.600`,
        }}
        transition="0.5s"
      >
        <C.Icon w="6" h="6" as={lk.icon} />
        <C.Text textAlign="center" fontSize="xs" fontWeight="medium">
          {lk.label}
        </C.Text>
      </C.VStack>
    </NextLink>
  );
};
