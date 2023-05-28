import {Avatar, Box} from "@mui/material";
import {styled} from "@mui/system";

import employer1 from "../includes/images/employers/employer1.png";
import employer2 from "../includes/images/employers/employer2.png";
import employer3 from "../includes/images/employers/employer3.png";
import employer4 from "../includes/images/employers/employer4.png";
import employer5 from "../includes/images/employers/employer5.png";

const Active = styled(Box)({
    color: '#0E5814',
    fontSize: '14px',
    fontFamily: 'Rubik',
    background: '#E3F9E5',
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const UnActive = styled(Box)({
    color: '#A61B1B',
    fontSize: '14px',
    fontFamily: 'Rubik',
    background: '#FFEEEE',
    borderRadius: '50%',
    width: '25px',
    height: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});



export const columns = [
    {
        id: 'name',
        label: 'שם',
        minWidth: "127px",
        format: (value) => <Box display="flex" alignItems="center">
            <Avatar
                alt={value.name}
                src={value.img}
                sx={{ width: 29, height: 29 , marginLeft: "15px"}}
            />
            {value.name}
        </Box>
    },
    { id: 'scope', label: 'מס׳ עובדים', minWidth: "108px" },
    {
        id: 'employeesAmount',
        label: 'סטטוס',
        minWidth: "92px",
        format: (value) => value !== 0 ? <Active>{value}</Active> : <UnActive>{value}</UnActive>
    },
];

export const rows = [
    {
        name: {
            name: "דניאל לוי",
            img: employer1
        },
        scope: "אורזים בסופר",
        employeesAmount: 5

    },
    {
        name: {
            name: "יצחק כהן",
            img: employer2
        },
        scope: "בנייה",
        employeesAmount: 8
    },
    {
        name: {
            name: "אנטון סרי",
            img: employer3
        },
        scope: "גננות",
        employeesAmount: 7
    },
    {
        name: {
            name: "יהושוע חי",
            img: employer4
        },
        scope: "סדרנות",
        employeesAmount: 2
    },
    {
        name: {
            name: "נתנאל בר",
            img: employer5
        },
        scope: "עזרה טכנית",
        employeesAmount: 0
    }
]