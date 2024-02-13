import { InputDropzone } from "@/client/components/InputDropzone";
import React, { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import { Button } from "@/client/components/Button";
import axios from "axios";

const initialState = {
  file: null,
  isLoading: false,
  result: {
    text: "",
  },
};

export const PageExtractText = () => {
  const toast = Chakra.useToast();

  const [state, setState] = useState<{
    isLoading: boolean;
    file: null | File;
    result: {
      text: string;
    };
  }>(initialState);

  const onDrop = (acceptedFiles: File[]) => {
    setState((prev) => ({ ...prev, file: acceptedFiles[0] }));
  };

  const onRemoveFile = () => {
    setState((prev) => ({ ...prev, file: null }));
  };

  const onCopyContent = (content: string) => {
    window.navigator.clipboard.writeText(content);
    toast({ title: "Copied To Clipboard" });
  };

  const onReset = () => {
    setState(initialState);
  };

  console.log("[file]", state);

  const onExtractText = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const form = new FormData();
      form.append("file", state.file as File);
      const { data } = await axios.post<{
        data: {
          text: string;
        };
      }>("/api/extract-text", form);
      console.log("[response]", data.data.text);
      setState((prev) => ({
        ...prev,
        result: { ...prev.result, text: data.data.text },
      }));
    } catch (e: any) {
      console.log("[error]", e.message);
    } finally {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <Chakra.VStack w="full" p="8">
      {!state.file && <InputDropzone onDrop={onDrop} />}
      {!!state.file && (
        <Chakra.VStack w="full" align="flex-end">
          <Chakra.HStack
            w="full"
            bg="gray.50"
            borderRadius="8"
            p="16"
            border="1px"
            borderColor="gray.200"
            justify="space-between"
            h="20vh"
          >
            <Chakra.Text>{state.file?.name}</Chakra.Text>
            <Button variant="outline" bg="transparent" onClick={onRemoveFile}>
              Remove File
            </Button>
          </Chakra.HStack>

          <Button isLoading={state.isLoading} onClick={onExtractText}>
            Extract Text
          </Button>
        </Chakra.VStack>
      )}

      {!!state.result.text && (
        <Chakra.VStack w="full" align="flex-end">
          <Chakra.Text>{state.result.text}</Chakra.Text>
          <Chakra.HStack w="full" justify="space-between">
            <Button onClick={onReset}>Reset</Button>
            <Button onClick={() => onCopyContent(state.result.text)}>
              Copy To Clipboard
            </Button>
          </Chakra.HStack>
        </Chakra.VStack>
      )}
    </Chakra.VStack>
  );
};
