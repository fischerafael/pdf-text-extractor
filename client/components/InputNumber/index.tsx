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
        borderRadius={theme.border.radius.regular}
      >
        <C.NumberInputField
          _focus={{ ring: "none", borderColor: theme.color.primary }}
          w="full"
          borderRadius={theme.border.radius.regular}
        />
        <C.NumberInputStepper borderRadius={theme.border.radius.regular}>
          <C.NumberIncrementStepper color={`${theme.color.primary}`} />
          <C.NumberDecrementStepper color={`${theme.color.primary}`} />
        </C.NumberInputStepper>
      </C.NumberInput>
    </FormControl>
  );
};
