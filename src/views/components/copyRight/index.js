import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" marginY={'15px'}>
            Copyright ©
            <Link color="inherit">
                Work Ability
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}