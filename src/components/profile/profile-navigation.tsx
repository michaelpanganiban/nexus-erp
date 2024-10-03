'use client'

import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { List, ListItem, ListItemButton } from '@mui/material';
import { ProfileInterface } from '@/interfaces/profile';

const items = [
    {name: 'General', icon: <AccountCircleIcon fontSize="medium" />},       
    {name: 'Contact Information', icon: <PhoneIcon fontSize="medium" />},
    {name: 'Address', icon: <HomeIcon fontSize="medium" />},
]

export const ProfileNavigation: React.FC<ProfileInterface> = ({ setSelectedIndex, selectedIndex }) => {
    const handleListItemClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <Paper elevation={2}>
            <List>
                {
                    items.map((item, index) => (
                        <ListItem 
                            onClick={() => handleListItemClick(index)}
                            disablePadding 
                            key={index}
                        >
                            <ListItemButton
                                selected={selectedIndex === index}
                                sx={{
                                    minHeight: 45,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: selectedIndex === index ? 'primary.main' : 'inherit'
                                    }}
                                >
                                    {item.icon}  
                                </ListItemIcon>
                                <ListItemText>{item.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
                
                <Divider />
                <ListItem 
                    onClick={() => handleListItemClick(items.length)}
                    disablePadding 
                >
                    <ListItemButton
                        selected={selectedIndex === items.length}
                        sx={{
                            minHeight: 45,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                color: selectedIndex === items.length ? 'primary.main' : 'inherit'
                            }}
                        >
                            <LockPersonIcon />  
                        </ListItemIcon>
                        <ListItemText>Change Password</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    );
}
