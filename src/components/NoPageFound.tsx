import { useNavigate } from "react-router-dom";

// Mui Imports
import { Box, Stack, Typography, Button } from "@mui/material";

const NoPageFound = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction='column'
      alignItems='center'
      justifyContent='center'
      height='100vh'
    >
      <Box sx={{ height: "40vh" }}>
        <img src='/darth-vader.svg' style={{ height: "100%" }} />
      </Box>
      <Typography variant='h3'>404</Typography>
      <Typography variant='h2' sx={{ mt: 2, textAlign: "center" }}>
        PAGE NOT FOUND
      </Typography>
      <Button onClick={() => navigate("/")}>Back to home</Button>
    </Stack>
  );
};

export default NoPageFound;
