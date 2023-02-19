// ** MUI Theme Provider
import { deepmerge } from "@mui/utils";
import { ThemeOptions } from "@mui/material";

// ** Type Import

// ** Theme Override Imports
import palette from "./palette";

const themeOptions = (): ThemeOptions => {
  // ** Vars

  const themeConfig = {
    palette: palette("light", "primary"),

    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette["primary"],
      },
    },
  });
};

export default themeOptions;
