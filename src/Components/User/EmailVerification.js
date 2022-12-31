import { React, useState } from 'react'
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import OTPInput from "otp-input-react";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();
function EmailVerification() {
  const [OTP, setOTP] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "error.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            OTP Verification
          </Typography>
          <Box>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h6">
                Please enter the verification code sent to your email
              </Typography>
            </Grid>
          </Box>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <OTPInput
                value={OTP}
                onChange={(OTP)=>{
                  setOTP(OTP)
                  console.log(OTP)
                }}
                autoFocus
                OTPLength={6}
                otpType="string"
                disabled={false}
                secure
                inputStyle={{
                  width: "3rem",
                  height: "3rem",
                  margin: "0 1rem",
                  fontSize: "2rem",
                  borderRadius: 4,
                  border: "2px solid #000000",
                }}
              />
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// const Copyrights = (props) => {
//   return (
//     <Typography
//       variant="body1"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
// //       <Link to="/" color="inherit">
// //         Ready Hands
// //       </Link>{" "}
// //       {new Date().getFullYear()}
// //       {"."}
// //     </Typography>
//   )
// }


export default EmailVerification
