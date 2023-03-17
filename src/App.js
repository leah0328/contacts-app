import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import UserTable from "./UserTable";
import { AppBar } from "@mui/material";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <AppBar position="static" sx={{ marginBottom: 5 }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, align: "center" }}
            >
              Contacts
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <UserTable sx={{ marginBottom: 5 }} />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
