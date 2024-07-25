import React, { useState } from "react";
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

export default function HodDashboard() {
  // State for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

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
  const slicedData = assignStudentDataATH.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const tableContainerClass =
    rowsPerPage >= 10 ? "max-h-[320px] overflow-y-auto" : "";

  const pageScrollBar = rowsPerPage >= 10 ? "overflow-y-hidden" : "";

  return (
    <div className="font-pop h-screen flex flex-row lg:overflow-hidden bg-gray-100">
      <SideDesign />
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
          <div className="m-4">
            {/* search input */}
            <InputField
              labelText="search:"
              id=""
              className="w-[40%] border-2 border-gray-500 py-1 px-2 mr-2 rounded-md lg:w-[25%] focus:active:border-gray-500"
              type="text"
              divClassName="flex flex-row gap-2 items-center justify-end"
            />
            {/* The Table view */}
            <div
              className={`flex flex-col max-h-[370px] p-2 lg:p-2 ${tableContainerClass}`}
            >
              <TableContainer component={Paper} className="border-2">
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>MAT NO.</StyledTableCell>
                      <StyledTableCell align="center">
                        Full Name
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        Project Title
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        1st Supervisor
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        2nd Supervisor
                      </StyledTableCell>
                      <StyledTableCell align="center">Status</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {slicedData.map((row) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                          {row.id}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.fullName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.approvedTopic}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.first_supervisor}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.second_supervisor}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.assignBtn ? (
                            <ThemeProvider theme={theme}>
                              <Button variant="contained">Assign</Button>
                            </ThemeProvider>
                          ) : (
                            <ThemeProvider theme={theme}>
                              <Button variant="contained">Assign</Button>
                            </ThemeProvider>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
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
