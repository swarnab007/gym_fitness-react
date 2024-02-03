import React from 'react'
import { Box, Typography, Stack } from '@mui/material';
import Logo from "../assets/images/Logo.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#f6efd3">
      <Stack alignItems="center" mb="20px" mt="10px">
        <img src={Logo} width="100px" height="80px" />
      </Stack>
      <Typography textAlign="center" sx={{fontSize: {lg: "26px", xs: "18px"}}} pb="30px">
        Made with ❤️ by Gym Lover Swarnab
      </Typography>
    </Box>
  )
}

export default Footer
