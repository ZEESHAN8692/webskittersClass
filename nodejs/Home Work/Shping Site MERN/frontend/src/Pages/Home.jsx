// import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardComp from "../Components/CardComp";
import axiosInstance from "../Api/axionInstance/axiosInstance";
import { products_end } from "../Api/end_point";
import { useEffect, useState } from "react";

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [products, setProducts] = useState([]);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  useEffect(() => {
    axiosInstance
      .get(products_end)
      .then((res) => {
        console.log(res.data.data);
        setProducts(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const drawerWidth = 240;
  const drawer = (
    <div>
      <Toolbar>
        <Image src="/Flipkart-Logo.wine.png" height={"70px"} />
      </Toolbar>
      <Divider />

      <Form>
        <div className="d-flex flex-column align-items-center">
          <br />
          <h5>Size</h5>
          <Form.Check type="checkbox" label="XL" />
          <Form.Check type="checkbox" label="S" />
          <h5 className="mt-3">Color</h5>
          <Form.Check type="checkbox" label="Red" />
          <Form.Check type="checkbox" label="Blue" />
          <h5 className="mt-3">Brand</h5>
          <Form.Check type="checkbox" label="Brand A" />
          <Form.Check type="checkbox" label="Brand B" />
          <Button variant="primary" className="mt-3" type="submit">
            Apply
          </Button>
        </div>
      </Form>

      <Divider />
    </div>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            slotProps={{
              root: {
                keepMounted: true,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography component="div" sx={{ marginBottom: 2 }}>
            <div className="row gap-2">
              {products && products.length > 0 ? (
                products.map((product, index) => (
                  <CardComp key={index} data={product} />
                ))
              ) : (
                <div>Product Not Found</div>
              )}
            </div>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
