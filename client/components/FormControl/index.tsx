import * as C from "@chakra-ui/react";
import React from "react";

export const FormControl = ({
  label,
  helpText,
  children,
}: {
  label: string;
  children: React.ReactNode;
  helpText?: string;
}) => {
  return (
    <C.FormControl as={C.VStack} align="flex-start" px="8" spacing="0">
      <C.FormLabel fontWeight="regular" fontSize="xs">
        {label}
      </C.FormLabel>
      {children}
      {helpText && (
        <C.FormHelperText fontSize="xs">{helpText}</C.FormHelperText>
      )}
    </C.FormControl>
  );
};
