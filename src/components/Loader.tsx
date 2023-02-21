// Mui Imports
import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
