import { Add } from "@/icons/add";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";


export interface IBinaryFile {
  file: File;
  fileBinary: string;
  status: string;
  id: string;
}
interface IImageUploader {
  isUploadedFiles: boolean;
  selectedFiles: IBinaryFile[],
  setSelectedFiles: any
}



export enum Status {
  PROGRESS = "Progress",
  COMPLETED = "Completed",
  FAILED = "Failed",
  UPLOADED = "Uploaded",
  PROCESSED = "Processed",
  READY = "Ready",
}
const ImageUploader: React.FC<IImageUploader> = ({ isUploadedFiles, selectedFiles, setSelectedFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles: any) => {
      if (selectedFiles.length === 10) {
        return;
      } else {
        acceptedFiles.forEach((file: File) => {
          const reader = new FileReader();
          reader.onload = () => {
            const binaryStr = reader.result;
            setSelectedFiles((prev: IBinaryFile[]) => [
              ...prev,
              {
                file: file,
                fileBinary: binaryStr,
                status: Status.READY,
                id: "uuid()",
              } as IBinaryFile,
            ]);
          };

          reader.readAsArrayBuffer(file);
        });
      }
    },
    [selectedFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });
  return (
    <div
      className={
        isUploadedFiles
          ? "image_uploader_main_div_files"
          : "image_uploader_main_div"
      }
      {...getRootProps()}
    >
      {!isUploadedFiles ? (
        <div className="add_icon_div">
          <Add />
        </div>
      ) : (
        <div>
          <Add />
        </div>
      )}
      {!isUploadedFiles ? (
        <div className="image_uploader_div_2">Upload High Quality pictures</div>
      ) : (
        <div className="image_uploader_div_2">Upload More</div>
      )}
      {!isUploadedFiles && (
        <div className="image_uploader_div_3">
          i will choose the best outfits
        </div>
      )}

      <input
        type="file"
        id="file-input"
        data-testid="file-input"
        {...getInputProps()}
      />
    </div>
  );
};

export default ImageUploader;
