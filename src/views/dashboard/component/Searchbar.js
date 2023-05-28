import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, InputBase, Typography, Toolbar, Box, AppBar} from "@mui/material";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#24759E", 0.15),
    '&:hover': {
        backgroundColor: alpha("#24759E", 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#166086'
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#166086',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function greetUserByTime() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
        return 'בוקר טוב';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'צהריים טובים';
    } else if (currentHour >= 18 && currentHour < 22) {
        return 'ערב טוב';
    } else {
        return 'לילה טוב';
    }
}

export default function SearchBar({ profile }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "none", boxShadow: "none"}}>
                <Toolbar sx={{ justifyContent: "space-between"}}>
                    <Avatar
                        alt={profile.name}
                        src={profile.img}
                        sx={{ width: 80, height: 80 }}
                    />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Typography
                        component="p"
                        sx={{ width: "fit-content", display: "inline", color: "black"}}
                    >
                        {greetUserByTime() + " " + profile.name}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}