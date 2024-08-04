import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiSolidCloudUpload } from "react-icons/bi";

interface Props {
  labelText: string;
  id: string;
  className: string;
  divClassName: string;
  setUpload:any
}

const FileUpload: React.FC<Props> = ({
  labelText,
  id,
  className,
  divClassName,
  setUpload
}) => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);
  const [, setFileContents] = useState<string[]>([]);

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

    setAcceptedFiles(acceptedFiles);

    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          setFileContents((prevFileContents) => [
            ...prevFileContents,
            reader.result as string,
          ]);
        }
      };
      reader.readAsText(file);
    });

    // localStorage.setItem("files", JSON.stringify(acceptedFiles));
    const selectedFile = acceptedFiles[0];
    const formData=new FormData()
    formData.append("file",selectedFile)
    setUpload(formData);

    console.log(selectedFile,formData)
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
        <input  {...getInputProps()} id={id} className={className}  />
        {isDragActive ? (
          <p>Drop the files here....</p>
        ) : (
          <div className="text-gray-500 flex flex-col items-center">
            <caption className="flex">
              {acceptedFiles.length > 0 ? (
                acceptedFiles.map((file, index) => (
                  <div key={index}>{file.name}</div>
                ))
              ) : (
                <div>
                  <BiSolidCloudUpload size={50} />
                  Drag and drop some files here, or click to select files.
                </div>
              )}
            </caption>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
