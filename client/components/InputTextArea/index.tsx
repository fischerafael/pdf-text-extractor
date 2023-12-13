import { theme } from "@/client/config/theme";
import * as C from "@chakra-ui/react";
import { FormControl } from "../FormControl";

interface InputTextAreaProps extends C.TextareaProps {
  label: string;
  helpText?: string;
}

export const InputTextArea = ({
  label,
  helpText,
  ...props
}: InputTextAreaProps) => {
  return (
    <FormControl label={label}>
      <C.Textarea
        bg="white"
        fontSize="xs"
        _focus={{ ring: "none", borderColor: theme.accentColour }}
        {...props}
      />
    </FormControl>
  );
};
