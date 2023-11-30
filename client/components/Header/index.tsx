import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { Button } from "../Button";
import { Logo } from "../Logo";

interface HeaderProps {
  logoSlot: React.ReactNode;
  linksSlot: React.ReactNode;
  actionSlot: React.ReactNode;
  isTransparent?: boolean;
}

export const Header = ({
  logoSlot,
  linksSlot,
  actionSlot,
  isTransparent = true,
}: HeaderProps) => {
  return (
    <C.HStack
      w="full"
      justify="center"
      bg={isTransparent ? "transparent" : `${theme.mainColour}`}
    >
      <C.HStack w="full" h="10vh" justify="space-between" maxW="container.xl">
        {logoSlot}
        {linksSlot}
        {actionSlot}
      </C.HStack>
    </C.HStack>
  );
};
