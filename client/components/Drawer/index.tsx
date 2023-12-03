import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface DrawerProps extends C.DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  headerSlot?: React.ReactNode;
  children: React.ReactNode;
}

export const Drawer = ({
  isOpen,
  onClose,
  headerSlot,
  children,
  ...rest
}: DrawerProps) => {
  return (
    <C.Drawer isOpen={isOpen} placement="left" onClose={onClose} {...rest}>
      <C.DrawerOverlay />
      <C.DrawerContent>
        <C.DrawerCloseButton />
        {!!headerSlot && (
          <C.DrawerHeader color={theme.accentColour}>
            {headerSlot}
          </C.DrawerHeader>
        )}
        <C.DrawerBody>{children}</C.DrawerBody>
      </C.DrawerContent>
    </C.Drawer>
  );
};
