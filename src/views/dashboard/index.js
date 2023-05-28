import React from 'react';
import { styled } from '@mui/system';
import {Typography, Box, List, ListItem, ListItemIcon, ListItemText, CardMedia, Paper} from '@mui/material';
import logo from '../includes/images/workabilityLogo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchBar from './component/Searchbar';
import profile from '../includes/images/profile.png';
import DataTable from "./component/datatable";
import { columns as serviceRecipientsCols, rows as serviceRecipientsData} from "./servicerecipients"
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

const Navbar = styled(Box)({
    width: '250px',
    backgroundColor: '#FFFFFF',
    padding: '16px',
    boxShadow: '0px 2px 10px rgba(11, 79, 113, 0.25)'
});

const Content = styled(Box)({
    flexGrow: 1,
    padding: '16px',
    backgroundColor: '#EBF8FF'
});

export default function DashboardPage() {
    return (
        <Box display="flex" height="100%">
            <Content>
                <SearchBar profile={{img: profile, name: "מלכה"}}/>
                <Box marginTop="100px">
                    <Box sx={{display: "flex", flexDirection: "column",  width: "540px"}}>
                        <Paper sx={{ display: "flex", paddingX: "20px", flexDirection: "column" , maxWidth: "500px"}}>
                            <Typography component="h1" sx={{ direction: "rtl", color: "#1F2933", fontSize: "20px"}}>
                                מקבלי שירות
                            </Typography>
                            <DataTable columns={serviceRecipientsCols} rows={serviceRecipientsData} height="700px" width="500px"/>
                        </Paper>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<AddIcon />}
                            sx={{ fontSize: "16px", borderRadius: "20px", marginTop: "10px", background: "linear-gradient(360deg, #166086 0%, #3994C1 108.04%)", boxShadow: "0px 2px 10px -2px rgba(12, 45, 61, 0.25)"}}
                        >
                            קלוט מקבל שירות חדש
                        </Button>
                    </Box>
                </Box>

            </Content>
            <Navbar>
                <CardMedia component="img" src={logo}/>
                <List component="nav" aria-label="main navigation">
                    <ListItem button>
                        <ListItemText primary="שולחן עבודה" sx={{ textAlign: 'right', marginRight: '20px'}}/>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="תיבת דואר" sx={{ textAlign: 'right', marginRight: '20px'}}/>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="מייל" sx={{ textAlign: 'right', marginRight: '20px'}}/>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Navbar>

        </Box>
    );
}
