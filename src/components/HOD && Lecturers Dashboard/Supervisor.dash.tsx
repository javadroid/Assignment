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
import { Link, useNavigate } from "react-router-dom";

export default function SupervisorsDashboard() {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [SData, setSData] = useState([]) as any[];
  const [DataFiltered, setDataFiltered] = useState([]) as any[];
  const [seletedStudent, setseletedStudent] = useState([]) as any[];

  const [section, setsection] = useState("2020/2021");
  const [batch, setbatch] = useState("A");
  const [type, settype] = useState("MSC");
  const [select, setselect] = useState();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDataFiltered(
      SData.filter(
        (t: any) =>
          t.is_student &&
          t.type === type &&
          t.batch === batch &&
          t.section === section
      )
    );
  }, [type]);
  const getData = async () => {
    const userdata = await axios.get(
      BaseUrl +
        "user/supervisor-project-student?lecturer_id=" +
        JSON.parse(localStorage.getItem("userdata")!).user_data._id
    );
    setSData(userdata.data);
    setDataFiltered(userdata.data.filter((t: any) => t.is_student));
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
    <div className="font-pop h-screen flex flex-row lg:overflow-hidden bg-gray-100">
      {isPopupOpen && (
        <AssignSupervisor
          selectedStudent={seletedStudent}
          onClose={setIsPopupOpen}
          getData={getData}
        />
      )}

      <div className="w-full text-black">
        <Navigation />
        <main className="w-full m-0 p-0 ">
          <div className="m-4">
            <div className="flex sm:flex-row justify-between items-center">
              <h1 className="font-semibold my-2 text-sm lg:text-lg">
                Project Proposal
              </h1>
              <MdOutlineNotificationsActive
                className="fill-[#726135] w-5 h-5 lg:w-6 lg:h-6 mr-4 cursor-pointer transform transition ease-linear hover:scale-110"
                to={"#"}
              />
            </div>
            <hr className="border-gray-400" />
            <h4 className="text-xs my-3">Dashboard-Project Proposal</h4>
          </div>
        </main>
        <section className="sm:overflow-x-hidden bg-[#ffffff] lg:overflow-auto border-2 border-gray-300 shadow-md m-4">
          <p className="px-4 py-1 border-b-2 border-b-gray-300 shadow-md">
            Project Topics
          </p>
          <div className="m-4 ">
            <div className="flex  flex-row justify-between">
              <div className="flex  flex-row">
                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText="Session:"
                  id="dropDown"
                  setSelectOption={(e: any, i: any) => setsection(i)}
                  name="Section"
                  data={["2020/2021", "2022/2024", "2024/2025"]}
                  className="  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500"
                />
                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText="Batch:"
                  id="dropDown"
                  setSelectOption={(e: any, i: any) => setbatch(i)}
                  name="Section"
                  data={["A", "B"]}
                  className="  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500"
                />

                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText="Student type:"
                  id="dropDown"
                  setSelectOption={(e: any, i: any) => {
                    settype(i);
                  }}
                  name="Section"
                  data={["MSC", "PGD"]}
                  className="  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500"
                />
              </div>

              <div className="flex  flex-row ">
                {/* <InputField
                    labelText="search:"
                    id=""
                    className=" border-2  border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500"
                    type="text"
                    divClassName="flex ml-10 flex-row gap-2 items-end justify-end"
                  /> */}
              </div>
            </div>

            <div
              className={`flex flex-col max-h-[370px] p-2 lg:p-2 ${tableContainerClass}`}
            >
              <TableContainer component={Paper} className="border-2">
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell>MAT NO.</StyledTableCell>
                      <StyledTableCell align="center">
                        Full Name
                      </StyledTableCell>
                      <StyledTableCell align="center">Topic</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slicedData.map((row: any, i: any) => {
                      const checked = seletedStudent.includes(row);

                      return (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell component="th" scope="row">
                            {i + 1}
                          </StyledTableCell>

                          <StyledTableCell component="th" scope="row">
                            {row.userID}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.fname} {row.lname}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row?.project?.name}
                          </StyledTableCell>
                          <StyledTableCell width={600} align="center">
                            <div className="flex flex-row justify-between items-center      ">
                              <button
                                disabled={!row?.project}
                                onClick={() => {
                                  navigate("/student-uploads", { state: row });
                                }}
                                className="group flex flex-row justify-center items-center px-8 py-2 rounded-xl bg-[#a1812e]"
                              >
                                {" "}
                                <span className="text-base text-white">
                                  {!row?.project
                                    ? "No project"
                                    : "View Project"}
                                </span>
                              </button>

                              {row?.project?.status !== "approved" && row.supervisors.major===JSON.parse(localStorage.getItem("userdata")!).user_data._id&& (
                                <>
                                  <button
                                    disabled={
                                      row?.project?.status === "rejected" ||
                                      !row?.project
                                    }
                                    onClick={() => {
                                      Swal.fire({
                                        title:
                                          "Do you want to approve this project?",
                                        cancelButtonColor: "yellow",
                                        confirmButtonColor: "green",
                                        showCancelButton: true,
                                        confirmButtonText: "Approve",
                                      }).then(async (result) => {
                                        /* Read more about isConfirmed, isDenied below */
                                        if (result.isConfirmed) {
                                          const userdata = await axios
                                            .put(
                                              BaseUrl +
                                                "user/project/" +
                                                row?.project?._id,
                                              {
                                                status: "approved",
                                                proposal_defense: {
                                                  status: "pending",
                                                },
                                              }
                                            )
                                            .then(() => {
                                              Swal.fire(
                                                "Approved!",
                                                "",
                                                "success"
                                              );
                                            });
                                        }
                                      });
                                    }}
                                    className="group flex flex-row justify-center items-center px-8 py-2 rounded-xl bg-[#4ce42e]"
                                  >
                                    {" "}
                                    <span className="text-base text-white">
                                      Approve Project
                                    </span>
                                  </button>
                                  <button
                                    disabled={
                                      row?.project?.status === "rejected" ||
                                      !row?.project
                                    }
                                    onClick={() => {
                                      Swal.fire({
                                        title:
                                          "Do you want to reject this project?",
                                        cancelButtonColor: "green",
                                        confirmButtonColor: "red",
                                        showCancelButton: true,
                                        confirmButtonText: "Reject",
                                      }).then(async (result) => {
                                        /* Read more about isConfirmed, isDenied below */
                                        if (result.isConfirmed) {
                                          const userdata = await axios
                                            .put(
                                              BaseUrl +
                                                "user/project/" +
                                                row?.project?._id,
                                              { status: "rejected" }
                                            )
                                            .then(() => {
                                              Swal.fire(
                                                "Rejected!",
                                                "",
                                                "success"
                                              );
                                            });
                                        }
                                      });
                                    }}
                                    className="group flex flex-row justify-center items-center px-8 py-2 rounded-xl bg-[#f33b3b]"
                                  >
                                    {" "}
                                    <span className="text-base text-white">
                                      Reject Project
                                    </span>
                                  </button>
                                </>
                              )}
                            </div>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className="">
                <TablePagination
                  rowsPerPageOptions={[3, 10, 30]}
                  component="div"
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
