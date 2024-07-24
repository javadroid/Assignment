import { createTheme } from "@mui/material/styles";

const newTheme = (theme: any) =>
  createTheme({
    ...theme,
    components: {
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            color: "#726135",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
          },
        },
      },
      MuiPickersCalendarHeader: {
        styleOverrides: {
          root: {
            color: "#ffffff",
            borderRadius: "3px",
            backgroundColor: "#726135",
          },
          switchViewButton: {
            color: "#ffffff",
          },
        },
      },
    },
  });

export { newTheme };
