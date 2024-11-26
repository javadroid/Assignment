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
import Notification from "../Notifications/Notification";

export default function HodDashboard() {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [SData, setSData] = useState([]) as any[];
  const [DataFiltered, setDataFiltered] = useState([]) as any[];
  const [seletedStudent, setseletedStudent] = useState([]) as any[];
  const [section, setsection] = useState("2020/2021");
  const [batch, setbatch] = useState("A");
  const [type, settype] = useState("MSC");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userdata = await axios.get(BaseUrl + "user");
    setSData(userdata.data);
    setDataFiltered(userdata.data.filter((t: any) => t.is_student));
    console.log(userdata.data);
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

  return (
    <div className='font-pop h-screen flex flex-row lg:overflow-hidden bg-gray-100'>
      {isPopupOpen && (
        <AssignSupervisor
          selectedStudent={seletedStudent}
          onClose={setIsPopupOpen}
          getData={getData}
        />
      )}

      <div className='w-full text-black'>
        <Navigation />
        <main className='w-full m-0 p-0 '>
          <div className='m-4'>
            <div className='flex sm:flex-row justify-between items-center'>
              <h1 className='font-semibold my-2 text-sm lg:text-lg'>
                Project Proposal
              </h1>
              <Notification />
            </div>
            <hr className='border-gray-400' />
            <h4 className='text-xs my-3'>Dashboard-Project Proposal</h4>
          </div>
        </main>
        <section className='sm:overflow-x-hidden bg-[#ffffff] lg:overflow-auto border-2 border-gray-300 shadow-md m-4'>
          <p className='px-4 py-1 border-b-2 border-b-gray-300 shadow-md'>
            Project Topics
          </p>
          <div className='m-4 '>
            <div className='flex  flex-row justify-between'>
              <ToggleButtonGroup
                color='primary'
                value={true}
                exclusive
                aria-label='Platform'>
                <ToggleButton
                  onChange={(e) => {
                    setAssigned(!isAssigned);
                    if (isAssigned) {
                      setDataFiltered(
                        SData.filter((t: any) => t.supervisors && t.is_student)
                      );
                    } else {
                      setDataFiltered(
                        SData.filter((t: any) => !t.supervisors && t.is_student)
                      );
                    }
                  }}
                  value={isAssigned}>
                  {isAssigned ? "Assigned" : "UnAssigned"}
                </ToggleButton>
              </ToggleButtonGroup>
              <div className='flex  flex-row'>
                {/* <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText='Session:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => setsection(i)}
                  name='Section'
                  data={["2020/2021", "2022/2024", "2024/2025"]}
                  className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                /> */}
                {/* <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText='Batch:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => setbatch(i)}
                  name='Section'
                  data={["A", "B"]}
                  className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                /> */}

                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText='Student type:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => {
                    console.log("check", batch, section, i);
                    setDataFiltered(
                      SData.filter(
                        (t: any) =>
                          t.type === i 
                      )
                    );
                  }}
                  name='Section'
                  data={["MSC", "PGD","PHD"]}
                  className='  border-2 border-gray-500 py-1 px-2 mr-2 rounded-md  focus:active:border-gray-500'
                />
              </div>

              <div className='flex  flex-row '>
                <button
                  onClick={() => {
                    if (seletedStudent.length === 0) {
                      Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Please Select a student first",
                      });
                    } else {
                      setIsPopupOpen(true);
                    }
                  }}
                  className='group flex flex-row justify-center items-center px-16 py-2 rounded-xl bg-[#a1812e]'>
                  {" "}
                  <span className='text-base text-white'>Assign</span>
                </button>
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

                      <StyledTableCell align='center'>
                        1st Supervisor
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        2nd Supervisor
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slicedData.map((row: any) => {
                      const checked = seletedStudent.includes(row);

                      return (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell component='th' scope='row'>
                            <input
                              className='checked:bg-[#EDBE44] bg-none w-5 h-5 lg:w-6 lg:h-6'
                              type='checkbox'
                              id={row._id}
                              checked={checked}
                              onChange={(e) =>
                                onClickChecker(e.target.checked, row)
                              }
                            />
                          </StyledTableCell>

                          <StyledTableCell component='th' scope='row'>
                            {row.userID}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            {row.fname} {row.lname}
                          </StyledTableCell>

                          <StyledTableCell align='center'>
                            {row?.supervisors?.major?.fname}{" "}
                            {row?.supervisors?.major?.lname}
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            {row?.supervisors?.minor?.fname}{" "}
                            {row?.supervisors?.minor?.lname}
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
