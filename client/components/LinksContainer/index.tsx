import * as C from "@chakra-ui/react";
import { Link } from "../Link";
import { ILink, links } from "@/client/config/links";
import { useGetIsPublicPage } from "@/client/hooks/general/useGetIsPublicPage";
import { utils } from "@/client/utils";

export const LinksContainer = () => {
  const isPublic = useGetIsPublicPage();
  return (
    <>
      <HorizontalLinks isPublic={isPublic} links={links} />
      <VerticalLinks isPublic={isPublic} links={links} />
    </>
  );
};

const HorizontalLinks = ({
  links,
  isPublic = false,
}: {
  links: ILink[];
  isPublic?: boolean;
}) => {
  const filteredLinks = isPublic ? utils.filterPublicLinks(links) : links;
  return (
    <C.HStack gap="8" display={["none", "none", "flex"]}>
      {filteredLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </C.HStack>
  );
};
const VerticalLinks = ({
  links,
  isPublic = false,
}: {
  links: ILink[];
  isPublic?: boolean;
}) => {
  const filteredLinks = isPublic ? utils.filterPublicLinks(links) : links;
  return (
    <C.VStack
      gap="4"
      py="4"
      align="flex-start"
      display={["flex", "flex", "none"]}
    >
      {filteredLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </C.VStack>
  );
};
