import Typography from "@mui/material/Typography";
import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#116ac2",
        height: "7vh",
      }}
    >
      <Toolbar>
        <Typography variant="h6">Tic tac toe</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
