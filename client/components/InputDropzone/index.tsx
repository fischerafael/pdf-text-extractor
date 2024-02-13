import React from "react";
import * as Chakra from "@chakra-ui/react";
import DropZone from "react-dropzone";

export const InputDropzone = ({ onDrop }: { onDrop: (e: any) => void }) => {
  return (
    <DropZone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <Chakra.VStack w="full" justify="center">
          <Chakra.VStack
            h="20vh"
            w="full"
            justify="center"
            border="dashed 1px"
            borderRadius="8"
            borderColor="gray.200"
            {...getRootProps()}
          >
            <Chakra.Input size={10 as any} {...getInputProps()} />
            <Chakra.Text>Select or Drag and Drop a PDF</Chakra.Text>
          </Chakra.VStack>
        </Chakra.VStack>
      )}
    </DropZone>
  );
};
