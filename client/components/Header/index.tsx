import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import * as Icon from "react-icons/hi";

interface HeaderProps {
  logoSlot: React.ReactNode;
  linksSlot: React.ReactNode;
  actionSlot: React.ReactNode;
  isTransparent?: boolean;
}

export const Header = ({ isTransparent = true, ...props }: HeaderProps) => {
  return (
    <C.HStack
      w="full"
      justify="center"
      bg={isTransparent ? "transparent" : `${theme.mainColour}`}
    >
      <MobileHeader {...props} />
    </C.HStack>
  );
};

const WebHeader = ({ logoSlot, linksSlot, actionSlot }: HeaderProps) => {
  return (
    <C.HStack w="full" h="10vh" justify="space-between" maxW="container.xl">
      {logoSlot}
      {linksSlot}
      {actionSlot}
    </C.HStack>
  );
};

const MobileHeader = ({ logoSlot, linksSlot, actionSlot }: HeaderProps) => {
  const { isOpen, onClose, onOpen } = C.useDisclosure();
  return (
    <C.HStack justify="space-between" h="10vh" w="full">
      {logoSlot}
      <C.IconButton
        aria-label="Hamburguer Menu"
        icon={<Icon.HiOutlineMenu />}
        colorScheme={theme.accentColour}
      />
    </C.HStack>
  );
};
