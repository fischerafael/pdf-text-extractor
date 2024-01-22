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
      <C.NumberInput
        fontSize="xs"
        w="full"
        bg="white"
        {...props}
        borderRadius="full"
      >
        <C.NumberInputField
          _focus={{ ring: "none", borderColor: theme.mainColour }}
          w="full"
          borderRadius="full"
        />
        <C.NumberInputStepper borderRadius="full">
          <C.NumberIncrementStepper color={`${theme.accentColour}.500`} />
          <C.NumberDecrementStepper color={`${theme.accentColour}.500`} />
        </C.NumberInputStepper>
      </C.NumberInput>
    </FormControl>
  );
};
