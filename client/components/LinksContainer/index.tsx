import * as C from "@chakra-ui/react";
import { Link } from "../Link";
import { ILink, links } from "@/client/config/links";

export const LinksContainer = () => {
  return (
    <>
      <HorizontalLinks links={links.pages} />
      <VerticalLinks links={links.pages} />
    </>
  );
};

const HorizontalLinks = ({ links }: { links: ILink[] }) => {
  return (
    <C.HStack gap="8" display={["none", "none", "flex"]}>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </C.HStack>
  );
};
const VerticalLinks = ({ links }: { links: ILink[] }) => {
  return (
    <C.VStack
      gap="4"
      py="4"
      align="flex-start"
      display={["flex", "flex", "none"]}
    >
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </C.VStack>
  );
};
