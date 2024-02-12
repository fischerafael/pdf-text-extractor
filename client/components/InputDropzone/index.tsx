import React from "react";
import DropZone from "react-dropzone";

export const InputDropzone = ({ onDrop }: { onDrop: (e: any) => void }) => {
  return (
    <DropZone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </DropZone>
  );
};

// (acceptedFiles) => console.log(acceptedFiles)}
