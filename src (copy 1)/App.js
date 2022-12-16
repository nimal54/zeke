import React from "react";
import HeaderPage from "./page/header.page";
import FooterPage from "./page/footer.page";
import HomePage from "./page/home.page";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={0}>
        <Item>
          <HeaderPage />
        </Item>
        <Item>
          <HomePage />
        </Item>
        <Item>
          <FooterPage />
        </Item>
      </Stack>
    </Box>
  );
}
export default App;
