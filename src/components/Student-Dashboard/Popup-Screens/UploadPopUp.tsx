import { IoClose } from "react-icons/io5";
import InputField from "../../Reusable-Code/InputField";
import FileUpload from "../../Reusable-Code/FileUpload";

interface UploadPopUpProps {
  onClose: () => void;
  onSubmit: () => void;
}

function UploadPopUp({ onClose, onSubmit }: UploadPopUpProps) {
  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex justify-center items-center z-10">
      <form
        action=""
        className="bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]  shadow-lg"
      >
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
            id={"projectTopic"}
            type={"textarea"}
            className={
              "pb-[3rem] text-wrap p-2 m-0 border-2 bg-slate-50 border-gray-500 outline-none focus:border-[#a1812e] rounded-[1rem]"
            }
            divClassName={"flex flex-col my-5"}
          />
          <FileUpload
            labelText={"Document: "}
            id={"documentUpload"}
            className={""}
            divClassName={
              "flex flex-col my-1 pb-[3rem] text-wrap p-2 m-0 border-2 bg-slate-50 border-gray-500 outline-none focus:border-[#a1812e] rounded-[1rem]"
            }
          />
          <button
            onClick={onSubmit}
            type="submit"
            className="font-pop text-white font-medium outline-none rounded-[0.9rem] ml-[21rem] border-2 bg-[#726135] mt-5 w-[5rem] p-2 hover:bg-[#54462f]"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadPopUp;
