import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider } from "@mui/material/styles";
import { newTheme } from "../Functions/CalanderStyle";

export default function DatePickerValue() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(""));
  console.log(value);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <ThemeProvider theme={newTheme}>
          <DatePicker
            label="Set Date"
            onChange={(newValue) => setValue(newValue)}
          />
        </ThemeProvider>
      </DemoContainer>
    </LocalizationProvider>
  );
}
