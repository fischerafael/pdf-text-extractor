import { ILink, links } from "@/client/config/links";
import { theme } from "@/client/config/theme";
import { utils } from "@/client/utils";
import * as C from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const LinksContainerWithIcons = () => {
  const privateLinks = utils.filterPrivateLinks(links);
  return (
    <C.VStack w="full" align="center" spacing="8" py="8">
      {privateLinks.map((lk) => (
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
        color={isActive ? theme.color.primary : theme.color.light400}
        _hover={{
          color: theme.color.primary,
        }}
        transition="0.5s"
      >
        <C.Icon w="6" h="6" as={lk.icon} />
        <C.Text
          fontFamily={theme.font.family}
          textAlign="center"
          fontSize="10px"
          fontWeight="medium"
        >
          {lk.label}
        </C.Text>
      </C.VStack>
    </NextLink>
  );
};
