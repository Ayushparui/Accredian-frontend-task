import React, {useState} from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";




function Register() {

    const navigate = useNavigate();

    const loginPage = () => {
        navigate("/login");
    }

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://accredian-backend-y63i.onrender.com/auth/register", data)
            console.log(res);
            if(res.status === 201){
                alert("Register Success");
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
        }
        console.log(data);
    }

    return (


        <Box sx={{
            height: "100vh",
            width: "100vw",
            background: `url('/ree.svg?url')`,
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
                <Typography variant="h4" sx={{ color: 'black' }}>Sign up</Typography>

                <form onSubmit={handleSubmit}>
                    <Box>
                        <TextField
                            label="Username"
                            id="outlined-basic-username"
                            variant="outlined"
                            value={data.username}
                            onChange={(e) => setData({ ...data, username: e.target.value })}
                            required
                            sx={{
                                width: '240px',
                            }}
                        />
                    </Box>
                    <Box sx={{
                        marginTop: "10px",
                    }}>
                        <TextField
                            label="Email"
                            id="outlined-basic-email"
                            variant="outlined"
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            required
                            sx={{
                                width: '240px',
                            }}
                        />
                    </Box>
                    <Box sx={{
                        marginTop: "10px",
                    }}>
                        <TextField
                            label="Password"
                            id="outlined-basic-password"
                            variant="outlined"
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            required
                            sx={{
                                width: '240px',
                            }}
                        />
                    </Box>
                    <Box sx={{
                        marginTop: "10px",
                    
                    }}>
                        <TextField
                            label="Confirm Password"
                            id="outlined-basic-password"
                            variant="outlined"
                            value={data.confirmpassword}
                            onChange={(e) => setData({ ...data, confirmpassword: e.target.value })}
                            required
                            sx={{
                                width: '240px',
                            }}
                        />
                    </Box>
                    <Box sx={{
                        marginTop: "10px",
                    }}>
                       <Button
                       variant="contained"
                       type="submit"
                        sx={{
                        bgcolor: '#715DF2',
                        width: '240px',
                        "&:hover": {
                            bgcolor: '#C1ACFA',
                        },
                       }}>Register</Button>
                    </Box>
                    <Box sx={{
                        marginTop: "10px",
                    }}>
                       <Typography variant="subtitle2" sx={{
                            color: '#464646',
                       }}>Alread registered ?
                       
                          <Button variant="text" onClick={loginPage} sx={{
                            color: '#715DF2',
                            "&:hover": {
                                color: '#C1ACFA',
                            },
                          }}>Login Now</Button>
                       
                       </Typography>
                    </Box>
                    

                </form>


            </Stack>
        </Box>


    )
}

export default Register;