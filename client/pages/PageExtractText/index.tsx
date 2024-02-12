import { InputDropzone } from "@/client/components/InputDropzone";
import React from "react";

export const PageExtractText = () => {
  const onDrop = (acceptedFiles: any) => {
    alert("hi");
    console.log(acceptedFiles);
  };

  return (
    <div>
      <InputDropzone onDrop={onDrop} />
    </div>
  );
};
