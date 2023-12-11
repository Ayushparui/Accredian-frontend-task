import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Home() {

  const navigate = useNavigate();

  const registerPage = () => {
    navigate("/register");
  }
  const loginPage = () => {
    navigate("/login");
  }


  return (

    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: `url('/home.svg?url')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Stack direction="column" sx={{
        position: 'absolute', // Set the position to absolute
        top: '40%', // Center vertically
        left: '50%', // Center horizontally
        width: '50%',
        transform: 'translate(-50%, -50%)', // Adjust for perfect centering
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",

      }}>
        <Typography variant="h2" sx={{
          fontWeight: '400',
          color: "#505050"
        }}>Welcome to Accredian</Typography>

        <Stack direction="row" spacing={2} sx= {{
          marginTop: '20px',
  
    
        }}>
        <Button variant="contained"
        onClick={registerPage}
        sx={{
          color: 'white',
          bgcolor: '#715DF2',
          width: '200px',
          borderRadius: '30px',

          "&:hover": {
            color: 'white',
            bgcolor: "#C1ACFA"
          },
        }}>Sign Up</Button>
         <Button variant="text" 
         onClick={loginPage}
         sx={{
            color: '#715DF2',
            width: '200px',
            borderBottom: '2px solid #715DF2', // Define the underline style
            "&:hover": {
              color: '#C1ACFA',
              bgcolor: 'transparent',
            borderBottom: '2px solid #C1ACFA', // Define the underline style

            },
          }}>Log In</Button>
        </Stack>

       
      </Stack>
    </Box>

  )
}

export default Home;