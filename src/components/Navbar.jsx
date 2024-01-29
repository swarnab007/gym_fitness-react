import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={{ sm: "20px", xs: "10px" }}
      py={{ sm: "10px", xs: "5px" }}
      borderBottom="1px solid #ccc"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: "80px", height: "80px" }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        alignItems="center"
        fontSize="20px"
        color="#3A1212"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <Link
          to="/exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
