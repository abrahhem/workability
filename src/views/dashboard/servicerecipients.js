import { styled } from '@mui/system';
import {Avatar, Box} from "@mui/material";

import work1 from '../includes/images/serviceRecipients/worker1.png'
import work2 from '../includes/images/serviceRecipients/worker2.png'
import work3 from '../includes/images/serviceRecipients/worker3.png'
import work4 from '../includes/images/serviceRecipients/worker4.png'
import work5 from '../includes/images/serviceRecipients/worker5.png'
import work6 from '../includes/images/serviceRecipients/worker6.png'
import work7 from '../includes/images/serviceRecipients/worker7.png'
import work8 from '../includes/images/serviceRecipients/worker8.png'
import work9 from '../includes/images/serviceRecipients/worker9.png'
import work10 from '../includes/images/serviceRecipients/worker10.png'
import work11 from '../includes/images/serviceRecipients/worker11.png'
import work12 from '../includes/images/serviceRecipients/worker12.png'



const Active = styled(Box)({
    color: '#0E5814',
    fontSize: '14px',
    fontFamily: 'Rubik',
    width: '43px',
    height: '25px',
    background: '#E3F9E5',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const UnActive = styled(Box)({
    color: '#A61B1B',
    fontSize: '14px',
    fontFamily: 'Rubik',
    width: '62px',
    height: '25px',
    background: '#FFEEEE',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const columns = [
    {
        id: 'name',
        label: 'שם',
        minWidth: 196,
        format: (value) => <Box display="flex" alignItems="center">
            <Avatar
                alt={value.name}
                src={value.img}
                sx={{ width: 29, height: 29 , marginLeft: "15px"}}
            />
            {value.name}
        </Box>
    },
    { id: 'joinedOn', label: 'תאריך הצטרפות', minWidth: 174 },
    {
        id: 'status',
        label: 'סטטוס',
        minWidth: 135,
        format: (value) => value === 'עובד' ? <Active>{value}</Active> : <UnActive>{value}</UnActive>
    },
];

export const rows = [
    {
        name: {
            name: "דניאל לוי",
            img: work1
        },
        joinedOn: "12/01/22",
        status: "עובד"
    },
    {
        name: {
            name: "דורון רפאל",
            img: work2
        },
        joinedOn: "13/03/21",
        status: "לא עובד"
    },
    {
        name: {
            name: "אלמוג כהן",
            img: work3
        },
        joinedOn: "14/01/23",
        status: "עובד"
    },
    {
        name: {
            name: "זיו אלי",
            img: work4
        },
        joinedOn: "17/04/20",
        status: "לא עובד"
    },
    {
        name: {
            name: "יונתן ססיקל",
            img: work5
        },
        joinedOn: "12/01/22",
        status: "עובד"
    },
    {
        name: {
            name: "יוחאי שיביו",
            img: work6
        },
        joinedOn: "23/05/23",
        status: "לא עובד"
    },
    {
        name: {
            name: "ענבל לוי",
            img: work7
        },
        joinedOn: "12/01/19",
        status: "עובד"
    },
    {
        name: {
            name: "יחיאל ששון",
            img: work8
        },
        joinedOn: "12/01/22",
        status: "עובד"
    },
    {
        name: {
            name: "אלמוג כץ",
            img: work9
        },
        joinedOn: "17/07/22",
        status: "לא עובד"
    },
    {
        name: {
            name: "נופר שרון",
            img: work10
        },
        joinedOn: "12/01/22",
        status: "לא עובד"
    },
    {
        name: {
            name: "אלחנן יעקוב",
            img: work11
        },
        joinedOn: "02/12/20",
        status: "לא עובד"
    },
    {
        name: {
            name: "דניאל דניאלי",
            img: work12
        },
        joinedOn: "12/01/22",
        status: "עובד"
    }
]

