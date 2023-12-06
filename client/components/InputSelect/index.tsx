import React from "react";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";
import { FormControl } from "../FormControl";

interface InputSelectProps extends C.SelectProps {
  label: string;
  options?: { value: string; key: string }[];
  helpText?: string;
  placeholder?: string;
}

export const InputSelect = ({
  label,
  helpText,
  options,
  placeholder,
  ...props
}: InputSelectProps) => {
  const isEnabled = !!options && options.length > 0;

  return (
    <FormControl label={label}>
      <C.Select
        fontSize="xs"
        _focus={{ ring: "none", borderColor: theme.accentColour }}
        borderRadius="none"
        isDisabled={!isEnabled}
        {...props}
      >
        {placeholder && (
          <option
            style={{ color: "lightGray" }}
            disabled={true}
            selected={true}
          >
            {placeholder}
          </option>
        )}
        {options?.map((op) => (
          <option key={op.key}>{op.value}</option>
        ))}
      </C.Select>
    </FormControl>
  );
};
