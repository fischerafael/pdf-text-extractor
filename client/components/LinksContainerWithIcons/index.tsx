import { ILink, links as lk } from "@/client/config/links";
import * as C from "@chakra-ui/react";

export const LinksContainerWithIcons = ({
  links = lk.pages,
}: {
  links: ILink[];
}) => {
  return (
    <C.VStack w="full" align="flex-start" spacing="8">
      {links.map((lk) => (
        <C.VStack
          key={lk.href}
          align="center"
          w="full"
          gap="0"
          cursor="pointer"
        >
          <C.Icon w="6" h="6" as={lk.icon} />
          <C.Text textAlign="center" fontSize="xs" fontWeight="medium">
            {lk.label}
          </C.Text>
        </C.VStack>
      ))}
    </C.VStack>
  );
};
