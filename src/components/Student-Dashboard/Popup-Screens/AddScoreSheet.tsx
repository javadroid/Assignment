/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoClose } from "react-icons/io5";
import InputField from "../../Reusable-Code/InputField";
import FileUpload from "../../Reusable-Code/FileUpload";
import { useState } from "react";
import { BaseUrl } from "../../../service";
import axios from "axios";

interface AddScoreSheetProps {
  onClose: () => void;
  getData:any,
  project:any
}

function AddScoreSheet({ onClose, getData ,project}: any) {
  const [projectTopic, setProjectTopic] = useState<string | []>([]);
  const [upload, setUpload] = useState() as any;


  const handleSubmit = () => {

    if(100-project.score<upload){
      alert("you have pass the score limit for this sheet "+(100-project.score)+" "+upload)
    }else if(upload===0){
      alert("Score is zero")
    }else{
      axios
      .post(`${BaseUrl}user/score`, {
        ...project,name:projectTopic,score:upload
      })
      .then((data) => {
       
        getData();
        onClose()
      });
    }
   
    
  };

  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex justify-center items-center z-10">
      <form
        action=""
        className="bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]  shadow-lg"
      >
        <div className="flex flex-row justify-between relative">
          <h2 className="font-bold">File in the scoring details carefully</h2>
          <IoClose
            onClick={()=>onClose()}
            style={{ cursor: "pointer" }}
            size={25}
            className="absolute bottom-3 right-1"
          />
        </div>

        <div>
        <InputField
            labelText={"Score Name "}
            id={"projectTopic"}
            type={"textarea"}
            onChange={(e)=>setProjectTopic(e.target.value)}
            className={
              " text-wrap p-2 m-0 border-2 bg-slate-50 border-gray-500 outline-none focus:border-[#a1812e] rounded-[1rem]"
            }
            divClassName={"flex flex-col my-5"}
          />

<InputField
            labelText={"Score "}
            id={"projectTopic"}
            type={"number"}
            onChange={(e)=>setUpload(e.target.value)}
            className={
              " text-wrap p-2 m-0 border-2 bg-slate-50 border-gray-500 outline-none focus:border-[#a1812e] rounded-[1rem]"
            }
            divClassName={"flex flex-col my-5"}
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="font-pop text-white font-medium outline-none rounded-[0.9rem] ml-[21rem] border-2 bg-[#726135] mt-5 w-[5rem] p-2 hover:bg-[#54462f]"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddScoreSheet;
