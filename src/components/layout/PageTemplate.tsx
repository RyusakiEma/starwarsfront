import { ReactNode } from "react";
import { Box } from "@mui/material";
import SectionWrapper from "./SectionWrapper";
import SearchInput from "../SearchInput";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh - 340px)",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          overflowX: "hidden",
        }}
      >
        <SectionWrapper>{children}</SectionWrapper>
      </Box>
    </>
  );
};

export default PageTemplate;
