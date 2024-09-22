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
import axios from "axios";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { BaseUrl } from "../../service";
import AddScoreSheet from "../Student-Dashboard/Popup-Screens/AddScoreSheet";
import DropDown from "../Reusable-Code/DropDown";
import Notification from "../Notifications/Notification";

export default function Score() {
  // State for pagination
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isSection, setisSection] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [section, setsection] = useState() as any;
  // const [batch, setbatch] = useState("A");
  const [type, settype] = useState("MSC");
  const [score, setscore] = useState(0);
  const [session, setSession] = useState() as any
  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    console.log("object",JSON.parse(localStorage.getItem("userdata")!).user_data.faculty)
    getData();
  }, [type,section]);

  const getData = async () => {
    const data = await axios.post(
      `${BaseUrl}user/getSessionName`,{   faculty:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.faculty,
        department:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.department,}
    );
    console.log(data);
    setSession(data.data);
    const userdata = await axios.post(BaseUrl + "user/getscore", {
      session: section,
      faculty:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.faculty,
      department:JSON.parse(localStorage.getItem("userdata")!)?.user_data?.department,
      type,
    });
    setData(userdata.data);
    setDataFiltered(userdata.data);
    let scr = 0;
    userdata.data.forEach((s: any) => {
      scr += s.score;
    });
    setscore(scr);
  };
  // Handle page change
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  // Handle page change
  const handleDelete = (score: any) => {
    axios.post(`${BaseUrl}user/deletescore/${score._id}`).then((data) => {
      getData();
    });
  };
  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Slice the data according to the current page and rows per page
  const slicedData = dataFiltered.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const tableContainerClass =
    rowsPerPage >= 10 ? "max-h-[320px] overflow-y-auto" : "";

  const pageScrollBar = rowsPerPage >= 10 ? "overflow-y-hidden" : "";

  return (
    <div className='font-pop h-screen flex flex-row lg:overflow-hidden bg-gray-100'>
      <div className='w-full text-black'>
        <Navigation />
        {isPopupOpen && (
          <AddScoreSheet
            project={{ session: section,  type, score }}
            onClose={setIsPopupOpen}
            getData={getData}
          />
        )}
        <main className='w-full m-0 p-0 '>
          <div className='m-4'>
            <div className='flex sm:flex-row justify-between items-center'>
              <h1 className='font-semibold my-2 text-sm lg:text-lg'>
                Score Sheet
              </h1>
              <Notification />
            </div>
          </div>
        </main>
        <section className='sm:overflow-x-hidden bg-[#ffffff] lg:overflow-auto border-2 border-gray-300 shadow-md m-4'>
          <p className='px-4 py-1 border-b-2 border-b-gray-300 shadow-md'></p>
          <div className='m-4'>
            {/* search input */}

            <div className='flex mb-2 flex-row justify-between'>
              <div className='flex flex-row'>
                <DropDown
                  // divClassName="flex flex-col xs:w-[30%]"
                  labelText='Section:'
                  id='dropDown'
                  setSelectOption={(e: any, i: any) => setsection(i)}
                  name='Section'
                  data={session}
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
              </div>

              <ToggleButtonGroup
                color='primary'
                value={true}
                exclusive
                aria-label='Platform'></ToggleButtonGroup>
              <div className='flex flex-row gap-2 items-center mr-5 bg-green-600 '>
                <ToggleButton
                  onClick={() => {
                    setIsPopupOpen(true);
                  }}
                  value={true}
                  style={{ color: "white" }}>
                  Add
                </ToggleButton>
              </div>
            </div>

            {/* The Table view */}
            <div
              className={`flex flex-col max-h-[370px] p-2 lg:p-2 ${tableContainerClass}`}>
              <TableContainer component={Paper} className='border-2'>
                <Table sx={{ minWidth: 400 }} aria-label='customized table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>

                      <StyledTableCell>Score ({100 - score})</StyledTableCell>
                      <StyledTableCell align='center'></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slicedData.map((row: any) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell component='th' scope='row'>
                          {row.name}
                        </StyledTableCell>

                        <StyledTableCell component='th' scope='row'>
                          {row.score}
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                          <ThemeProvider theme={theme}>
                            <Button
                              onClick={() => handleDelete(row)}
                              color='error'
                              variant='contained'>
                              Delete
                            </Button>
                          </ThemeProvider>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
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
