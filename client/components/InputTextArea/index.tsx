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
        fontFamily={theme.font.family}
        bg="white"
        fontSize="12px"
        _focus={{ ring: "none", borderColor: theme.color.primary }}
        {...props}
      />
    </FormControl>
  );
};
