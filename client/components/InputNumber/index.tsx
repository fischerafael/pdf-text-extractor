import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";
import { FormControl } from "../FormControl";

interface InputTextProps extends C.NumberInputProps {
  label: string;
  helpText?: string;
}

export const InputNumber = ({ label, helpText, ...props }: InputTextProps) => {
  return (
    <FormControl label={label}>
      <C.NumberInput fontSize="xs" w="full" {...props}>
        <C.NumberInputField
          _focus={{ ring: "none", borderColor: theme.accentColour }}
          w="full"
          borderRadius="none"
        />
        <C.NumberInputStepper>
          <C.NumberIncrementStepper />
          <C.NumberDecrementStepper />
        </C.NumberInputStepper>
      </C.NumberInput>
    </FormControl>
  );
};
