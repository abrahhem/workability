import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import {Typography, Box, List, ListItem, ListItemIcon, ListItemText, CardMedia, Paper} from '@mui/material';
import logo from '../includes/images/workabilityLogo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchBar from './component/Searchbar';
import profile from '../includes/images/profile.png';
import DataTable from "./component/datatable";
import { columns as serviceRecipientsCols, rows as serviceRecipientsData} from "./servicerecipients"
import { columns as employersCols, rows as employersData } from "./employers"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CircleChart from "./component/circlechart";

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

const Tasks = styled(Box) ({
    width: "280px",
    height: "26px",
    background: 'linear-gradient(180deg, #EAE2F8 -20.45%, rgba(234, 226, 248, 0) 151.52%)',
    borderRadius: "10px",
    direction: "rtl",
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px"

});

const tasks = [
    {
        label: "פגישה ראשונית עם ליאור",
        time: "10:00"
    },
    {
        label: "ום הולדת לנטלי",
        time: "12:00"
    },
    {
        label: "להתקשר למעסיק של נתנאל",
        time: "13:30"
    },
    {
        label: "לעשות ביקור בית לדור",
        time: "14:00"
    },
    {
        label: "פישיבת צוות",
        time: "15:00"
    },

]

export default function DashboardPage() {
    return (
        <Box display="flex" height="100%">
            <Content>
                <SearchBar profile={{img: profile, name: "מלכה" }}/>
                <Box marginTop="100px" sx={{ display: "flex", justifyContent: "space-between"}}>
                    <Paper  sx={{ height: "784px", width: "320px", display: "flex", flexDirection: "column", paddingX: "15px"}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar/>
                        </LocalizationProvider>
                        <Box dir="rtl" overflow="scroll">
                            <Typography sx={{fontSize: "20px", color: "#1F2933"}}>
                                משימות לביצוע
                            </Typography>
                            { tasks.map( (task => {
                                return (
                                    <Tasks>
                                        <Typography sx={{fontSize: "16px", color: "#1F2933"}}>
                                            {task.label}
                                        </Typography>
                                        <Typography sx={{fontSize: "14px", color: "#166086"}}>
                                            {task.time + "בשעה "}
                                        </Typography>
                                    </Tasks>
                                )
                            }))}
                        </Box>
                    </Paper>
                    <Box sx={{ height: "784px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <Paper sx={{ width: "360px", height: "360px"}}>
                            <CircleChart/>
                        </Paper>
                        <Paper sx={{ width: "330px", height: "360px",  paddingX: "15px"}}>
                            <Typography component="h1" sx={{ direction: "rtl", color: "#1F2933", fontSize: "20px"}}>
                                 מעסיקים
                            </Typography>
                            <DataTable columns={employersCols} rows={employersData} height="330px" width="330px"/>
                        </Paper>
                    </Box>
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
                <List component="nav" aria-label="main navigation" sx={{ height: "80%"}}>
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
                    <ListItem button>
                        <ListItemText primary="עודות" sx={{ textAlign: 'right', marginRight: '20px'}}/>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="הגדרות" sx={{ textAlign: 'right', marginRight: '20px'}}/>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                    </ListItem>
                    <Link to="/dashboard">
                        <ListItem sx={{ position: 'absolute', bottom: '0px' }}>
                            <ListItemText primary="יצאה" sx={{ textAlign: 'right', marginRight: '20px', color: "black" }} />
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                </List>
            </Navbar>

        </Box>
    );
}
