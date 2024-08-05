import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { lecturersListDataATH } from "../../Utilities/Data";
import { Theme, useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { BaseUrl } from "../../service";
import { TextField } from "@mui/material";

interface Props {
  label: string;
  className?: string;
  setData?:any
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const DropDownMenu: React.FC<Props> = ({ label, className,setData }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [allLecturer, setAllLecturer] = React.useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filterText, setFilterText] = useState(" ");
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setData&&setData(value)
    const lec = allLecturer.filter((i: any) => i._id === value) as any;
    console.log(lec, value);
    setPersonName([lec[0]?.fname + " " + lec[0]?.lname]);
  };

  useEffect(() => {
    getLecturerData();
  }, []);

  const getLecturerData = () => {
    axios.get(`${BaseUrl}user`).then((data) => {
      setAllLecturer(data.data.filter((item: any) => !item.is_student));
      setFilterData(data.data.filter((item: any) => !item.is_student));
    });
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, mb: 1 }}>
        <Select
        onKeyDown={()=>{}}
          sx={{ backgroundColor: "#f6dd9e" }}
          className="w-[100%] "
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select from Lecturers to {label}</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={{
            PaperProps: {
              onMouseDown: (event:any) => {
                event.stopPropagation();
              },
              
            },
          }}
        >
          <MenuItem value="">
            <TextField
              onClick={(e) => e.stopPropagation()}
              onKeyDown={()=>{}}
              variant="outlined"
              // value={filterText}
              className="z-20"
              placeholder="Filter lecturers"
              onChange={(e) => {
                
                 
                setFilterData(
                  allLecturer.filter(
                    (i: any) =>
                      i.fname
                        .toLocaleLowerCase()
                        .includes(e.target.value.toLocaleLowerCase().trim()) ||
                      i.lname
                        .toLocaleLowerCase()
                        .includes(e.target.value.toLocaleLowerCase().trim())
                  )
                );
              }}
              fullWidth
              margin="dense"
              sx={{ mb: 1 }}
            />
          </MenuItem>
          {filterData.map((data: any) => (
            <MenuItem
              key={data._id}
              value={data._id}
              style={getStyles(
                data.fname + " " + data.lname,
                personName,
                theme
              )}
            >
              {data.fname + " " + data.lname}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {/* display the selected lecturer */}
      <div className=" w-[100%] font-medium ">
        {personName.length > 0 && (
          <div>
            <h3 className={className}>{label}:</h3>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                marginTop: 1.5,
              }}
            >
              {personName.map((name) => (
                <Chip key={name} label={name} />
              ))}
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
