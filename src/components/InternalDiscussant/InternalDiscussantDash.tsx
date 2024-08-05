import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navigation from "../Reusable-Code/Navigation";
import InputField from "../Reusable-Code/InputField";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";
import { assignStudentDataATH } from "../../Utilities/Data";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import {
  StyledTableCell,
  StyledTableRow,
  theme,
} from "../Functions/ThemeFunction";

export default function InternalDiscussantDash() {
  // State for sorting
  const [sortNewest, setSortNewest] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle sorting toggle
  const handleSortToggle = (newSortNewest: boolean) => {
    setSortNewest(newSortNewest);
    setDropdownOpen(false);
  };

  // Sort the data according to the current sorting order
  const sortedData = [...assignStudentDataATH].sort((a, b) =>
    sortNewest ? b.id - a.id : a.id - b.id
  );

  return (
    <div className="font-pop h-screen flex flex-row lg:overflow-hidden bg-gray-100">
      <div className="w-full text-black">
        <Navigation />
        <main className="w-full m-0 p-0">
          <div className="m-4">
            <div className="flex sm:flex-row justify-between items-center">
              <h1 className="font-semibold my-2 text-sm lg:text-lg">
                Project Review
              </h1>
              <MdOutlineNotificationsActive
                className="fill-[#726135] w-5 h-5 lg:w-6 lg:h-6 mr-4 cursor-pointer transform transition ease-linear hover:scale-110"
                to={"#"}
              />
            </div>
            <hr className="border-gray-400" />
          </div>
        </main>
        <section className="sm:overflow-x-hidden bg-[#ffffff] lg:overflow-auto border-2 border-gray-300 shadow-md m-4">
          <div className="m-4">
            {/* search and sort */}
            <div className="flex items-center justify-between">
              {/* search input */}
              <InputField
                labelText="search:"
                id=""
                className="w-[50%] h-[50px] border-2 border-gray-500 py-1 px-2 mr-2 rounded-md lg:w-[100%] focus:active:border-gray-500"
                type="text"
                divClassName="flex flex-row gap-2 w-[70%] items-center"
              />
              {/* sorting the data by newest */}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Sort by {sortNewest ? "Newest" : "Oldest"}
                    <FaSortDown
                      className="ml-2 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {dropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        onClick={() => handleSortToggle(true)}
                      >
                        Newest
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                        onClick={() => handleSortToggle(false)}
                      >
                        Oldest
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* The Table view */}
            <div className="flex flex-col p-2 lg:p-2 max-h-[400px] overflow-y-auto">
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
                      <StyledTableCell align="center">Status</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sortedData.map((row) => (
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
                          {row.assignBtn ? (
                            <ThemeProvider theme={theme}>
                              <Button variant="contained">View</Button>
                            </ThemeProvider>
                          ) : (
                            <ThemeProvider theme={theme}>
                              <Button variant="contained">View</Button>
                            </ThemeProvider>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
