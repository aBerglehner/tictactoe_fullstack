import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <footer>
      <Container
        maxWidth="xl"
        sx={{
          padding: 2,
          mt: "auto",
          backgroundColor: "#f5f5f5", // Footer background color
        }}
      >
        <Typography variant="body1">Footer content goes here.</Typography>
      </Container>
    </footer>
  );
}

export default Footer;
