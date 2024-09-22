/* eslint-disable @typescript-eslint/no-unused-vars */
import { IoClose } from "react-icons/io5";
import InputField from "../../Reusable-Code/InputField";
import FileUpload from "../../Reusable-Code/FileUpload";
import { useEffect, useState } from "react";
import { BaseUrl } from "../../../service";
import axios from "axios";
import Swal from "sweetalert2";

interface ScoreSheetProps {
  onClose: () => void;
  getData1: any;
  project: any;
  userData: any;
}

function ScoreSheet({ onClose, getData1, project,selectedStudent, userData }: any) {
  const [projectTopic, setProjectTopic] = useState<string | []>([]);
  const [upload, setUpload] = useState() as any;
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [votedata, setvotedata] = useState() as any;
  const [dataFiltered, setDataFiltered] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isSection, setisSection] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [section, setsection] = useState("2020/2021");
  const [batch, setbatch] = useState("A");
  const [type, settype] = useState("MSC");
  const [score, setscore] = useState(0);
  const [studentScoreData, setstudentScoreData] = useState() as any;
  useEffect(() => {
    console.log("selectedStudent",selectedStudent)
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    const votedata = await axios.post(BaseUrl + "user/getvote", {
      type: selectedStudent.type,
      session: selectedStudent.id,
      student_id: userData._id,
      lecturer_id: JSON.parse(localStorage.getItem("userdata")!).user_data
        ._id,
    });

    setvotedata(votedata.data)
    
    if(votedata.data){
      Object.entries(votedata.data.scores).forEach(([name, value]:any) => {
        console.log("object",name, value)
        // handleInputChange(name,value, 0);
        setstudentScoreData((prevData: any) => ({
          ...prevData,
          [name]: value
        }));
      });
    }
    const userdata = await axios.post(BaseUrl + "user/getscore", {
      session: selectedStudent.id,
      faculty:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.faculty,
      department:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.department,
      type: selectedStudent.type,
    });
    setData(userdata.data);

    setDataFiltered(userdata.data);
    let scr = 0;
    userdata.data.forEach((s: any) => {
      scr += s.score;
      if(!votedata.data){
        handleInputChange(s?.name, 0, s?.score);
      }
      
    });
    setscore(scr);
  };

  const handleSubmit = async () => {
    const result = compareScores(studentScoreData, dataFiltered);
    if (result) {
      Swal.fire({
        icon: "error",

        text: result,
      });
    }else{
      console.log({
        id:votedata?._id||null,
        scores: studentScoreData,
        session: selectedStudent.session,
        batch: selectedStudent.batch,
        type: selectedStudent.type,
        student_id: userData._id,
        project_id:userData.project._id,
        project:selectedStudent.project,
        lecturer_id: JSON.parse(localStorage.getItem("userdata")!).user_data
          ._id,
      })

       
    await axios
    .post(`${BaseUrl}user/vote`, {
      id:votedata?._id,
      scores: studentScoreData,
      session: selectedStudent.id,
      type: selectedStudent.type,
      project_id:userData.project._id,
        project:selectedStudent.project,
      student_id: userData._id,
      lecturer_id: JSON.parse(localStorage.getItem("userdata")!).user_data
        ._id,
    })
    .then((data) => {
      console.log("data", data.data);
      getData();
      getData1()
      onClose();
    });
    }

   
    console.log(result);
  };
  const handleInputChange = (
    name: string,
    value: number,
    checkvalue: number
  ) => {
    setstudentScoreData((prevData: any) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="font-pop fixed top-0 left-0 w-full h-full bg-black bg-opacity-50   flex justify-center items-center z-10">
      <form
        action=""
        className="bg-slate-50 p-[2rem] rounded-md z-[7rem] w-[30rem]  shadow-lg "
      >
        <h1 className=" font-bold flex flex-row justify-center items-center">
          Score Sheet
        </h1>
        <h2 className=" flex flex-row justify-center items-center mb-1">
          {" "}
          {userData?.fname} {userData?.lname}
        </h2>
        <div className="flex flex-row justify-between relative ">
          <IoClose
            onClick={() => onClose()}
            style={{ cursor: "pointer" }}
            size={25}
            className="absolute bottom-3 right-1"
          />
        </div>

        {dataFiltered.map((d: any, i) => (
          <div key={i} className="flex flex-row items-center justify-between ">
            <div className=" ">
              <span>{d?.name}</span>
            </div>

            <div className="flex flex-row items-center justify-center">
              <InputField
                labelText={" "}
                id={"projectTopic"}
                type={"number"}
                value={studentScoreData[`${d?.name}`||0] }
                onChange={(e) =>
                  handleInputChange(d?.name, Number(e.target.value), d?.score)
                }
                className={
                  " text-wrap w-20 p-2 m-0 border-2 bg-slate-50 border-gray-500 outline-none focus:border-[#a1812e] rounded-[1rem]"
                }
                divClassName={"flex flex-col my-1 "}
              />
              <div className="min-w-20 justify-center items-center flex">
                <span>{d?.score}</span>
              </div>
            </div>
          </div>
        ))}
       
        <button
          onClick={handleSubmit}
          type="button"
          className="font-pop text-white font-medium outline-none rounded-[0.9rem] ml-[21rem] border-2 bg-[#726135] mt-5 w-[5rem] p-2 hover:bg-[#54462f]"
        >
         {votedata?"UPDATE":"SUBMIT"} 
        </button>
      </form>
    </div>
  );
}

export default ScoreSheet;

function getkey(key:string,obj:any) {
  // console.log(obj)
  return obj? obj[key]:null;
}
function compareScores(
  objectScores: { [key: string]: number },
  arrayScores: any[]
) {
  const result = {} as any;

  for (let key in objectScores) {
    const objectScore = objectScores[key];

    // Find the corresponding entry in the array based on the name
    const arrayEntry = arrayScores.find((entry) => entry.name === key);

    // If the entry is found, compare the scores
    if (arrayEntry) {
      if (objectScore > arrayEntry.score) {
        return (
          "Score for " +
          key +
          ` (${objectScore}) is greater than ` +
          arrayEntry.score
        );
      }
    } else {
      // If there's no corresponding entry in the array
      result[key] = "not found in array";
    }
  }

  // return result;
}
