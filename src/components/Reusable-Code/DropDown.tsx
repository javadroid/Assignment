import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { lecturersListDataATH } from "../../Utilities/Data";
import { Theme, useTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

interface Props {
  label: string;
  className?: string;
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const DropDownMenu: React.FC<Props> = ({ label, className }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <Box sx={{ minWidth: 120, mb: 2 }}>
        <Select
          // sx={{ backgroundColor: "#f6dd9e" }}
          className="w-[100%]"
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Select from Lecturer</em>;
            }

            return selected.join(", ");
          }}
        >
          <MenuItem disabled value="">
            <em>Faculty</em>
          </MenuItem>
          {lecturersListDataATH.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {/* display the selected lecturer */}
      <div className="mt-10 w-[100%] font-medium ">
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
