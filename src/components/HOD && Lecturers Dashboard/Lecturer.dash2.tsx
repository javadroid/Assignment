import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navigation from "../Reusable-Code/Navigation";
import SideDesign from "../Reusable-Code/SideDesign";
import InputField from "../Reusable-Code/InputField";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { assignStudentDataATH } from "../../Utilities/Data";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import {
  StyledTableCell,
  StyledTableRow,
  theme,
} from "../Functions/ThemeFunction";
import DropDown from "../Reusable-Code/DropDown";
import AssignSupervisor from "../Student-Dashboard/Popup-Screens/AssignSupervisor";
import axios from "axios";
import { BaseUrl } from "../../service";
import Swal from "sweetalert2";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import AssignInternalDiscussants from "../Student-Dashboard/Popup-Screens/AssignInternalDiscussants";
import Assignspgs from "../Student-Dashboard/Popup-Screens/Assignspgs";
import AssignExternalExaminer from "../Student-Dashboard/Popup-Screens/AssignExternalExaminer";
import ScoreSheet from "../Student-Dashboard/Popup-Screens/ScoreSheet";

export default function LecDashboard2() {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [isPopupOpen4, setIsPopupOpen4] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);
  const [SData, setSData] = useState([]) as any[];
  const [userData, setuserData] = useState() as any;
  const [DataFiltered, setDataFiltered] = useState([]) as any[];
  const [seletedStudent, setseletedStudent] = useState([]) as any[];

  const { id } = useParams();
  const [section, setsection] = useState("2020/2021");
  const [batch, setbatch] = useState("A");
  const [type, settype] = useState("MSC");
  const [check, setcheck] = useState("Internal Discussant") as any;

  const [state, setstate] = useState("");
  const [datatopass, setdatatopass] = useState({
    id,
    state,
    
    DataFiltered,
    project: "proposal_defense",
  }) as any;
  const [dateq, setdate] = useState() as any;

  useEffect(() => {
    getDataSession();
  }, [type]);

  useEffect(() => {
    // getData();
    if (state === "Proposal Defense") {
      setdatatopass({
        id,
        state,
        type:SData?.type,
        assign:"internal_discussants",
        DataFiltered,
        project: "proposal_defense",
      });

    }
    if (state === "Internal Defense") {
      setdatatopass({
        id,
        state,
        type:SData?.type,
        
        DataFiltered,
        project: "internal_defense",
      });
    }
    if (state === "External Defense") {
      setdatatopass({
        id,
        state,
        type:SData?.type,
        
        DataFiltered,
        project: "external_defense",
      });
    }

    if (state === "First Seminar") {
    }
    if (state === "Second Seminar") {
    }
    if (state === "Third Seminar") {
      setdatatopass({
        id,
        state,
        type:SData?.type,
        
        DataFiltered,
        project: "seminar3",
      });
    }
  }, [state]);

  const getData = async () => {
    const userdata = await axios.get(BaseUrl + "user");
    setSData(userdata.data);
    setDataFiltered(userdata.data.filter((t: any) => t.is_student));
  };

  const getDataSession = async () => {
    const userdata = await axios.get(
      BaseUrl +
        `user/sessionMain?type=${state}&id=` +id
    );
    setSData(
      userdata.data[0]
    );
    setDataFiltered(
      userdata.data[1] );
      
      setstate(userdata.data[0].status.split("_")[0].charAt(0).toUpperCase()+userdata.data[0].status.split("_")[0].slice(1)+" Defense")
    setdate(
      new Date(
        Number(
          userdata.data[0][userdata.data[0].status.split("_")[0]+"_defense"].date)
      ).toDateString()
    );
    console.log(userdata.data.filter((t: any) => t.type === type));
  };
  // Handle page change
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Slice the data according to the current page and rows per page
  const slicedData = DataFiltered.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const tableContainerClass =
    rowsPerPage >= 10 ? "max-h-[320px] overflow-y-auto" : "";

  const pageScrollBar = rowsPerPage >= 10 ? "overflow-y-hidden" : "";
  // Handler for checkbox change
  const onClickChecker = (checked: any, row: any) => {
    if (checked) {
      // Add row to selectedStudent

      setseletedStudent((prevSelected: any) => [...prevSelected, row]);

      console.log(seletedStudent);
    } else {
      // Remove row from selectedStudent
      setseletedStudent((prevSelected: any) =>
        prevSelected.filter((student: any) => student._id !== row._id)
      );
    }
  };

  const [isAssigned, setAssigned] = useState(false);
  const navigate = useNavigate();
  return (
    <div className='font-pop h-screen  flex flex-row lg:overflow-hidden bg-gray-100'>
      {isPopupOpen && (
        <AssignInternalDiscussants
          selectedStudent={datatopass}
          onClose={setIsPopupOpen}
          getData={getDataSession}
          label='Internal Discussant'
        />
      )}

      

      {isPopupOpen4 && (
        <ScoreSheet
          selectedStudent={datatopass}
          userData={userData}
          onClose={setIsPopupOpen4}
          getData1={getDataSession}
          label='External Examiner'
        />
      )}

      <div className='w-full text-black'>
        <Navigation />
        <main className='w-full m-0 p-0 '>
          <div className='m-4'>
            <div className='flex sm:flex-row justify-between items-center'>
              <h1 className='font-semibold my-2 text-sm lg:text-lg'>
                {JSON.parse(localStorage.getItem("userdata")!).user_data.type}
              </h1>
              <MdOutlineNotificationsActive
                className='fill-[#726135] w-5 h-5 lg:w-6 lg:h-6 mr-4 cursor-pointer transform transition ease-linear hover:scale-110'
                to={"#"}
              />
            </div>
            <hr className='border-gray-400' />
            <h4 className='text-xs my-3'>
              {" "}
              {
                JSON.parse(localStorage.getItem("userdata")!).user_data.fname
              }{" "}
              {JSON.parse(localStorage.getItem("userdata")!).user_data.lname}{" "}
            </h4>
          </div>
        </main>
        <section className='sm:overflow-x-hidden bg-[#ffffff] lg:overflow-auto border-2 border-gray-300 shadow-md m-4'>
          <p className='px-4 py-1 border-b-2 border-b-gray-300 shadow-md'>
            Date for {state}: {dateq === "Invalid Date" ? "" : dateq}
          </p>
          <div className='m-4 '>
            <div className='flex  flex-row justify-end'>
              {/* <div className='flex  flex-row'>
                {![
                  "HOD",
                  "Provost",
                  "Dean",
                  "Departmental PG Coordinator",
                ].includes(
                  JSON.parse(localStorage.getItem("userdata")!).user_data.type
                ) && (
                  <DropDown
                    // divClassName="flex flex-col xs:w-[30%]"
                    labelText='Role:'
                    id='dropDown'
                    setSelectOption={(e: any, i: any) => setcheck(i)}
                    name='Section'
                    data={["Internal Discussant", "SPGS", "External Examiner"]}
                    className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                  />
                )}

                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText='Session:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => setsection(i)}
                  name='Section'
                  data={["2020/2021", "2022/2024", "2024/2025"]}
                  className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                />
                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText='Batch:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => setbatch(i)}
                  name='Section'
                  data={["A", "B"]}
                  className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                />

                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText='Student type:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => {
                    settype(i);
                  }}
                  name='Section'
                  data={["MSC", "PGD"]}
                  className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                />

                <DropDown
                  divClassName=''
                  labelText='Student type:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => {
                    setstate(i);
                  }}
                  name='Section'
                  data={
                    type === "MSC"
                      ? [
                          "Proposal Defense",
                          "Internal Defense",
                          "External Defense",
                        ]
                      : [
                          "First Seminar",
                          "Second Seminar",
                          "Third Seminar",
                          "External Defense",
                        ]
                  }
                  className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                />
              </div> */}
              {["HOD", "Provost"].includes(
                JSON.parse(localStorage.getItem("userdata")!).user_data.type
              ) && (
                <div className='   flex flex-row justify-evenly'>
                  { (
                    <button
                      onClick={() => {
                        setIsPopupOpen(true);
                      }}
                      className='group flex flex-row justify-center items-center p-1 px-2  rounded-xl bg-[#a1812e]'>
                      {" "}
                      <span className='text-base text-white'>
                        {"Assign"}
                      </span>
                    </button>
                  )}

                  

                  
                </div>
              )}
              <div className='flex  flex-row '>
              <button
                    onClick={async () => {
                      const proj=datatopass.project+".status"
                      axios
                        .post(BaseUrl + "user/assign", {
                          id,
                          type,
                          defense:datatopass.project,
                          [proj]:
                            SData[datatopass.project]?.status ===
                            "active"
                              ? "done"
                              : "active",
                          [datatopass.project]: {
                            students:DataFiltered.map((a:any)=>a._id),
                            status:
                              SData[datatopass.project]
                                ?.status === "active"
                                ? "done"
                                : "active",
                          },
                        })
                        .then((s) => {
                          console.log(s.data);
                          Swal.fire({
                            icon: "success",
                            title: "Success",
                          });

                          getDataSession();
                        });
                    }}
                    className='group flex flex-row justify-center items-center p-1 px-2  rounded-xl bg-[#ab572a]'>
                    {" "}
                    <span className='text-base text-white'>
                      {SData?.proposal_defense?.status !==
                      "active"
                        ? "Start Session"
                        : "End Session"}{" "}
                      {/* {state} */}
                    </span>
                  </button>
              </div>
            </div>

            <div
              className={`flex flex-col max-h-[370px] p-2 lg:p-2 ${tableContainerClass}`}>
              <TableContainer component={Paper} className='border-2'>
                <Table sx={{ minWidth: 400 }} aria-label='customized table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell>MAT NO.</StyledTableCell>
                      <StyledTableCell align='center'>
                        Full Name
                      </StyledTableCell>
                      <StyledTableCell align='center'>Topic</StyledTableCell>

                      {type === "MSC" ? (
                        <>
                          <StyledTableCell align='center'>
                            Proposal Defense
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            Internal Defense
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            External Defense
                          </StyledTableCell>
                        </>
                      ) : (
                        <>
                          <StyledTableCell align='center'>
                            First Seminar
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            Second Seminar
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            Third Seminar
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            External Defense
                          </StyledTableCell>
                        </>
                      )}

                      <StyledTableCell align='center'>
                        Internal Discussants
                      </StyledTableCell>
                      <StyledTableCell align='center'>spgs</StyledTableCell>
                      <StyledTableCell align='center'>
                        External Examiner
                      </StyledTableCell>
                      <StyledTableCell align='center'></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slicedData.map((row: any, i: any) => {
                      const checked = seletedStudent.includes(row);

                      return (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell component='th' scope='row'>
                            {i + 1}
                          </StyledTableCell>

                          <StyledTableCell component='th' scope='row'>
                            {row.userID}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            {row.fname} {row.lname}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            {row?.project?.name}
                          </StyledTableCell>
                          {type === "MSC" ? (
                            <>
                              <StyledTableCell align='center'>
                                {row?.project?.proposal_defense?.score ||row?.project?.proposal_defense?.status || ""}
                              </StyledTableCell>
                              <StyledTableCell align='center'>
                                {row?.project?.internal_defense?.score ||row?.project?.internal_defense?.status || ""}
                              </StyledTableCell>
                              <StyledTableCell align='center'>
                                {row?.project?.external_defense?.score ||row?.project?.external_defense?.status || ""}
                              </StyledTableCell>
                            </>
                          ) : (
                            <>
                              <StyledTableCell align='center'>
                                {row?.project?.proposal_defense?.score ||row?.project?.proposal_defense?.status || ""}
                              </StyledTableCell>
                              <StyledTableCell align='center'>
                                {row?.project?.internal_defense?.score ||row?.project?.internal_defense?.status || ""}
                              </StyledTableCell>
                              <StyledTableCell align='center'>
                                {row?.project?.external_defense?.score ||row?.project?.external_defense?.status || ""}
                              </StyledTableCell>
                              <StyledTableCell align='center'>
                                {row?.project?.seminar3?.score ||row?.project?.seminar3?.status || ""}
                              </StyledTableCell>
                          
                             
                            </>
                          )}

                          <StyledTableCell component='th' scope='row'>
                            {SData?.internal_discussants?.fname || ""}{" "}
                            {SData?.internal_discussants?.lname || ""}
                          </StyledTableCell>
                          <StyledTableCell component='th' scope='row'>
                            {SData?.spgs?.fname || ""}{" "}
                            {SData?.spgs?.lname || ""}
                          </StyledTableCell>
                          <StyledTableCell component='th' scope='row'>
                            {SData?.external_examiner?.fname || ""}{" "}
                            {SData?.external_examiner?.lname || ""}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            <div className='flex flex-row justify-between items-center      '>
                              <button
                                disabled={!row.project}
                                onClick={() => {
                                  navigate("/view-uploaded", {
                                    state: row.project,
                                  });
                                }}
                                className='group flex flex-row justify-center items-center px-8 py-2 rounded-xl bg-[#a1812e]'>
                                {" "}
                                <span className='text-base text-white'>
                                  {!row?.project
                                    ? "No project"
                                    : "View Project"}
                                </span>
                              </button>
                            </div>
                          </StyledTableCell>

                          <StyledTableCell align='center'>
                            {
                              SData[datatopass.project]?.status==="active"&&
                              <div className='flex flex-row justify-between items-center      '>
                              <button
                                disabled={!row.project}
                                onClick={() => {
                                  setIsPopupOpen4(true);
                                  setuserData(row);
                                }}
                                className='group flex flex-row justify-center items-center px-8 py-2 rounded-xl bg-[#ed643a]'>
                                {" "}
                                <span className='text-base text-white'>
                                  Score
                                </span>
                              </button>
                            </div>
                            }
                            
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className=''>
                <TablePagination
                  rowsPerPageOptions={[3, 10, 30]}
                  component='div'
                  count={assignStudentDataATH.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  className={`${pageScrollBar}`}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}