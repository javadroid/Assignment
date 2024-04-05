import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { BiSolidCloudUpload } from "react-icons/bi";
interface Props {
  labelText: string;
  id: string;
  className: string;
  divClassName: string;
}

const FileUpload: React.FC<Props> = ({
  labelText,
  id,
  className,
  divClassName,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      if (
        file.type !== "application/pdf" &&
        file.type !== "application/msword" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        alert("Only PDF, DOC, and DOCX files are allowed");
        return;
      }
    });
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <div
        style={{ pointerEvents: "auto", cursor: "grab" }}
        {...getRootProps()}
        className={divClassName}
      >
        <input {...getInputProps()} id={id} className={className} multiple />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="text-gray-500 flex flex-col items-center">
            <BiSolidCloudUpload size={50} />
            <caption className="flex">
              Drag and drop some files here, or click to select files.
            </caption>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
