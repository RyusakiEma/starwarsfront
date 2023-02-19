import { ReactNode } from "react";
import { Box } from "@mui/material";

interface Props {
  children: ReactNode;
}

export default function SectionWrapper({ children }: Props) {
  return (
    <Box
      sx={{
        ml: { xs: "18px", md: "46px" },
        mr: { xs: "18px", md: "46px" },
        mt: { xs: "24px", md: "40px" },
        mb: { xs: "35px", md: "50px" },
      }}
    >
      {children}
    </Box>
  );
}
