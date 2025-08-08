import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Next JS
        </Typography>

        <Box>
          <Button component={Link} href="/" color="inherit">
            Home
          </Button>
          <Button component={Link} href="/about" color="inherit">
            About
          </Button>
          <Button component={Link} href="/contect" color="inherit">
            Contact
          </Button>
          <Button component={Link} href="/task/task1" color="inherit">
            Task 1
          </Button>
          <Button component={Link} href="/task/task2" color="inherit">
            Task 2
          </Button>
          <Button component={Link} href="/login" color="inherit">
            Login
          </Button>
          <Button component={Link} href="/register" color="inherit">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
