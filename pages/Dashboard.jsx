import React from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

function Dashboard() {

    const data = localStorage.getItem('user').toUpperCase()


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
    }



    return(
        
        <Box sx={{
            height: "100vh",
            width: "100vw",
            background: `url('../public/ree.svg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

        }}>
            <Stack direction="column" spacing={2} sx={{
                position: 'absolute', // Set the position to absolute
                top: '45%', // Center vertically
                left: '50%', // Center horizontally
                width: '50%',
                transform: 'translate(-50%, -50%)', // Adjust for perfect centering
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                color: 'white',
            }}>
                <Typography variant="h4" sx={{ color: 'black' }}>Welcome Back {`${data}`}</Typography>

                <Button onClick={logout} variant="contained">Logout</Button>


            </Stack>
        </Box>

    )
}

export default Dashboard;