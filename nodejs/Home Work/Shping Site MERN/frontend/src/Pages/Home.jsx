
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardComp from "../Components/CardComp";
import axiosInstance from "../Api/axionInstance/axiosInstance";
import { delete_product_end, products_end } from "../Api/end_point";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);


  const handleDrawerToggle = () => {
    if (!isClosing) setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => setIsClosing(false);

  const fetchProducts = () => {
    axiosInstance
      .get(products_end)
      .then((res) => {
        setProducts(res.data.data);
        setAllProducts(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = (id) => {
    axiosInstance.delete(`${delete_product_end}/${id}`).then(() => {
      alert("Data Delete Success");
      fetchProducts();
    });
  };

  const handleCreate = () => navigate("/create-product");

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = (e) => {
    if (e) e.preventDefault();
    let filtered = [...allProducts];

    if (selectedSize.length > 0) {
      filtered = filtered.filter((item) =>
        item.size?.some((s) => selectedSize.includes(s))
      );
    }

    if (selectedColors.length > 0) {
      filtered = filtered.filter((item) =>
        item.colors?.some((c) => selectedColors.includes(c))
      );
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((item) => selectedBrands.includes(item.brand));
    }

    if (search.trim()) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setProducts(filtered);
  };

  return (
    <Box className="home-container">
      <CssBaseline />
      <AppBar position="fixed" className="custom-appbar">
        <Toolbar className="toolbar-flex">
          <Box className="toolbar-left">
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              All Products
            </Typography>
          </Box>

          <div className="search-container">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") applyFilters(e);
              }}
            />
          </div>

          <Button
            variant="contained"
            onClick={handleCreate}
            className="add-button"
          >
            ADD PRODUCTS
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box component="nav" className="drawer-nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          onTransitionEnd={handleDrawerTransitionEnd}
          ModalProps={{ keepMounted: true }}
          classes={{ paper: "drawer-paper" }}
        >
          <Toolbar>
            <Link to="/">
              <Image src="/Flipkart-Logo.wine.png" height={"70px"} />
            </Link>
          </Toolbar>
          <Divider />
          <Form onSubmit={applyFilters} className="filter-form">
            <h5>Size</h5>
            <Form.Check
              type="checkbox"
              label="XL"
              onChange={() => toggleFilter("XL", setSelectedSize)}
            />
            <Form.Check
              type="checkbox"
              label="S"
              onChange={() => toggleFilter("S", setSelectedSize)}
            />
            <h5 className="mt-3">Color</h5>
            <Form.Check
              type="checkbox"
              label="Red"
              onChange={() => toggleFilter("Red", setSelectedColors)}
            />
            <Form.Check
              type="checkbox"
              label="Blue"
              onChange={() => toggleFilter("Blue", setSelectedColors)}
            />
            <h5 className="mt-3">Brand</h5>
            <Form.Check
              type="checkbox"
              label="Brand A"
              onChange={() => toggleFilter("Brand A", setSelectedBrands)}
            />
            <Form.Check
              type="checkbox"
              label="Brand B"
              onChange={() => toggleFilter("Brand B", setSelectedBrands)}
            />
            <Button variant="primary" className="mt-3" type="submit">
              Apply
            </Button>
          </Form>
        </Drawer>

        <Drawer variant="permanent" classes={{ paper: "drawer-paper" }} open>
          <Toolbar>
            <Link to="/">
              <Image src="/Flipkart-Logo.wine.png" height={"70px"} />
            </Link>
          </Toolbar>
          <Divider />
          <Form onSubmit={applyFilters} className="filter-form">
            <h5>Size</h5>
            <Form.Check
              type="checkbox"
              label="S"
              onChange={() => toggleFilter("S", setSelectedSize)}
            />
            <Form.Check
              type="checkbox"
              label="M"
              onChange={() => toggleFilter("M", setSelectedSize)}
            />
            <Form.Check
              type="checkbox"
              label="L"
              onChange={() => toggleFilter("L", setSelectedSize)}
            />
            <Form.Check
              type="checkbox"
              label="XL"
              onChange={() => toggleFilter("XL", setSelectedSize)}
            />
            <Form.Check
              type="checkbox"
              label="XXL"
              onChange={() => toggleFilter("XXL", setSelectedSize)}
            />

            <h5 className="mt-3">Color</h5>
            <Form.Check
              type="checkbox"
              label="Red"
              onChange={() => toggleFilter("Red", setSelectedColors)}
            />
            <Form.Check
              type="checkbox"
              label="Black"
              onChange={() => toggleFilter("Black", setSelectedColors)}
            />
            <Form.Check
              type="checkbox"
              label="Purple"
              onChange={() => toggleFilter("Purple", setSelectedColors)}
            />
            <Form.Check
              type="checkbox"
              label="Green"
              onChange={() => toggleFilter("Green", setSelectedColors)}
            />
            <h5 className="mt-3">Brand</h5>
            <Form.Check
              type="checkbox"
              label="Adidas"
              onChange={() => toggleFilter("Adidas", setSelectedBrands)}s
            />
            <Form.Check
              type="checkbox"
              label="Reebok"
              onChange={() => toggleFilter("Reebok", setSelectedBrands)}
            />
            <Form.Check
              type="checkbox"
              label="Puma"
              onChange={() => toggleFilter("Puma", setSelectedBrands)}
            />
            <Form.Check
              type="checkbox"
              label="Zara"
              onChange={() => toggleFilter("Zara", setSelectedBrands)}
            />

            <Button variant="primary" className="mt-3" type="submit">
              Apply
            </Button>
          </Form>
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box component="main" className="main-content">
        <Toolbar />
        <Typography component="div">
          <div className="row gap-5 justify-content-center">
            {products.length > 0 ? (
              products.map((product, index) => (
                <CardComp
                  key={index}
                  data={product}
                  deleteProduct={deleteProduct}
                />
              ))
            ) : (
              <div>No Products Found</div>
            )}
          </div>
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
