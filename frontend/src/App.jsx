import "./App.css";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
