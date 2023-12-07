import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import React from "react";

interface ModalProps extends C.ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  header?: React.ReactElement;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  header,
  ...props
}: ModalProps) => {
  return (
    <C.Modal isCentered isOpen={isOpen} onClose={onClose} {...props}>
      <C.ModalOverlay />
      <C.ModalContent w="full">
        {!!header && (
          <C.ModalHeader fontWeight="medium" px="8">
            {header}
          </C.ModalHeader>
        )}
        <C.ModalCloseButton borderRadius="4" color={theme.mainColour} />
        <C.ModalBody w="full" py="8">
          {children}
        </C.ModalBody>
      </C.ModalContent>
    </C.Modal>
  );
};
