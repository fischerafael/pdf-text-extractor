import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";
import { FormControl } from "../FormControl";

interface InputTextProps extends C.InputProps {
  label: string;
  helpText?: string;
}

export const InputText = ({ label, helpText, ...props }: InputTextProps) => {
  return (
    <FormControl label={label}>
      <C.Input
        bg="white"
        fontSize="xs"
        _focus={{ ring: "none", borderColor: theme.accentColour }}
        {...props}
      />
    </FormControl>
  );
};
