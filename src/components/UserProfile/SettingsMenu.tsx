// import React from 'react';
// import {Tabs, Tab, Box} from '@mui/material';
// import { Link } from 'react-router-dom';
// import DeleteActiveAccount from '../DeleteActiveAccount/DeleteActiveAccount';


// export default function SettingsMenu(){
//     const [value, setValue] = React.useState(0);
//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);}
//     return (
//     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="data change options" >
//             <Link to='profile'><Tab label="User profile" sx={{width:'250px'}} /></Link>
//             <Link to='settings-login'><Tab label="Change login" sx={{width:'250px'}} /></Link>
//             <Link to='settings-email'><Tab label="Change e-mail" sx={{width:'250px'}} /></Link>
//             <Link to='settings'><Tab label="Change password" sx={{width:'250px'}} /></Link>
//             <Link to='settings-photo'><Tab label="Change photo" sx={{width:'250px'}} /></Link>
//             <Link to='settings-personal-data'><Tab label="Change personal data" sx={{width:'250px'}} /></Link>
//             <Link to='settings-language'><Tab label="Change language" sx={{width:'250px'}} /></Link>
//             <DeleteActiveAccount />
//         </Tabs>
// </Box>
//     )
// }
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserData from './components/UserData';
import Login from './components/Login';
import Email from './components/Email';
import Password from './components/Password';
import Photo from './components/Photo';
import PersonalData from './components/PersonalData';
import DeleteActiveAccount from '../DeleteActiveAccount';

export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
export function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SettingsMenu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="">
                    <Tab label="User profile" sx={{ width: '250px' }} />
                    <Tab label="Change login" sx={{ width: '250px' }} />
                    <Tab label="Change e-mail" sx={{ width: '250px' }} />
                    <Tab label="Change password" sx={{ width: '250px' }} />
                    <Tab label="Change photo" sx={{ width: '250px' }} />
                    <Tab label="Change personal data" sx={{ width: '250px' }} />
                    <Tab label="Change language" sx={{ width: '250px' }} />
                    <DeleteActiveAccount />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <UserData />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Email />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Password />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Photo />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <PersonalData />
            </TabPanel>
            <TabPanel value={value} index={6}>
                Language
            </TabPanel>
        </Box>
    );
}
