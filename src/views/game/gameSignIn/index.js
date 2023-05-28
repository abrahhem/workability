import React from 'react';
import './css/style.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



export default function GameSignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            remember: data.get('remember')
        });
    };
    return(
        <Box className={'game container'}>
            <h1>WorkAbility</h1>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <h2>Identification</h2>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="id"
                    label="ID number"
                    name="id"
                    autoComplete="ID number"
                    autoFocus
                    sx={{ width: '70%'}}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{ width: '70%'}}
                />
                <Button
                    type="submit"

                    variant="contained"
                    className={''}
                    sx={{ mt: 3, mb: 2 , backgroundColor: '#F98051', width: '30%'}}
                >
                    Start
                </Button>
            </Box>
        </Box>
    );
};