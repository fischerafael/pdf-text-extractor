import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { Button } from "../Button";
import { Logo } from "../Logo";
import * as Icon from "react-icons/hi";
import { Drawer } from "../Drawer";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface HeaderProps {
  logoSlot?: React.ReactNode;
  linksSlot?: React.ReactNode;
  actionSlot?: React.ReactNode;
  isTransparent?: boolean;
  isDisplayLinksOnWeb?: boolean;
}

export const Header = ({ isTransparent = true, ...props }: HeaderProps) => {
  return (
    <C.HStack
      w="full"
      justify="center"
      bg={isTransparent ? "transparent" : `${theme.mainColour}`}
    >
      <WebHeader {...props} />
      <MobileHeader {...props} />
    </C.HStack>
  );
};

const WebHeader = ({
  logoSlot,
  linksSlot,
  actionSlot,
  isDisplayLinksOnWeb = true,
}: HeaderProps) => {
  return (
    <C.HStack
      display={["none", "none", "flex"]}
      w="full"
      h="10vh"
      justify="space-between"
      maxW="container.xl"
    >
      {logoSlot}
      {!!isDisplayLinksOnWeb && linksSlot}
      {actionSlot}
    </C.HStack>
  );
};

const MobileHeader = ({ logoSlot, linksSlot, actionSlot }: HeaderProps) => {
  const { asPath } = useRouter();
  const { isOpen, onClose, onOpen } = C.useDisclosure();

  const isMobile = C.useBreakpointValue({
    base: true,
    md: false,
  });

  useEffect(() => {
    onClose();
  }, [asPath]);

  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose();
    }
  }, [isMobile]);

  return (
    <C.HStack
      display={["flex", "flex", "none"]}
      justify="space-between"
      h="10vh"
      w="full"
    >
      {logoSlot}
      <C.IconButton
        aria-label="Hamburguer Menu"
        bg={theme.mainColour}
        icon={<Icon.HiOutlineMenu />}
        colorScheme={theme.accentColour}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} headerSlot={<Logo />}>
        <C.VStack w="full" align="flex-start" spacing="8" py="8">
          <C.VStack w="full" align="flex-start">
            {actionSlot}
          </C.VStack>
          <C.VStack w="full" align="flex-start">
            {linksSlot}
          </C.VStack>
        </C.VStack>
      </Drawer>
    </C.HStack>
  );
};
