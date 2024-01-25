import { useToast } from "@chakra-ui/react";

export const useToasts = () => {
  const toast = useToast();

  const display = (
    variant: "success" | "info",
    title: string,
    description?: string
  ) => {
    toast({
      status: variant,
      title,
      description,
    });
  };

  return {
    display,
  };
};
