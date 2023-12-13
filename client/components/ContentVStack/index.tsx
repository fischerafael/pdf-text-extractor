import React from "react";
import * as C from "@chakra-ui/react";

interface VStackProps extends C.StackProps {
  children: React.ReactNode;
}

export const ContentVStack = ({
  children,
  minH = "90vh",
  ...props
}: VStackProps) => {
  return (
    <C.VStack minH={minH} w="full" p="8" spacing="4" {...props}>
      {children}
    </C.VStack>
  );
};
