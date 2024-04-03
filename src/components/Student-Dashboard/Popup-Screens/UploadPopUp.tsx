import { IoClose } from "react-icons/io5";
import InputField from "../../Reusable-Code/InputField";
import FileUpload from "../../Reusable-Code/FileUpload";

interface UploadPopUpProps {
  onClose: () => void;
}

function UploadPopUp({ onClose }: UploadPopUpProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 font-pop  flex justify-center items-center z-10">
      <div className="bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]">
        <div className="flex flex-row justify-between relative">
          <h2 className="font-bold">File in your details carefully</h2>
          <IoClose
            onClick={onClose}
            style={{ cursor: "pointer" }}
            size={25}
            className="absolute bottom-3 right-1"
          />
        </div>

        <div>
          <InputField
            labelText={"Project Topic: "}
            id={""}
            type={"textarea"}
            className={
              "pb-[3rem] text-wrap p-2 m-0 border-2 bg-slate-50 border-gray-500 outline-none focus:border-[#a1812e] rounded-[1rem]"
            }
            divClassName={"flex flex-col my-5"}
          />
          <FileUpload
            labelText={"Document: "}
            id={""}
            className={""}
            divClassName={
              "flex flex-col my-1 pb-[3rem] text-wrap p-2 m-0 border-2 bg-slate-50 border-gray-500 outline-none focus:border-[#a1812e] rounded-[1rem]"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default UploadPopUp;
