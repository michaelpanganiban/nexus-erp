'use client';

import React, { useState } from 'react';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface DrawerItemsProps {
  open: boolean;
}

export const DrawerItems: React.FC<DrawerItemsProps> = ({ open }) => {
  // State to keep track of the selected item
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  // Function to handle item click
  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const items = [
    { text: 'Dashboard', icon: <SsidChartIcon /> },
    { text: 'Reports', icon: <ContentPasteIcon /> },
  ];

  const services = [
    { text: 'Inventory', icon: <InventoryIcon /> },
    { text: 'Sales', icon: <AttachMoneyIcon /> },
  ];

  return (
    <>
      <List>
        {items.map((item, index) => (
          <ListItem 
            key={item.text} 
            disablePadding 
            sx={{ display: 'block' }}
            onClick={() => handleListItemClick(index)} // Set active item on click
          >
            <ListItemButton
              selected={selectedIndex === index} // Highlight the selected item
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: selectedIndex === index ? 'primary.main' : 'inherit', // Change icon color if active
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  opacity: open ? 1 : 0,
                  fontWeight: selectedIndex === index ? 'bold' : 'normal', // Change text weight if active
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {services.map((item, index) => (
          <ListItem 
            key={index + items.length} // Ensure unique keys
            disablePadding 
            sx={{ display: 'block' }}
            onClick={() => handleListItemClick(index + items.length)} // Set active item on click
          >
            <ListItemButton
              selected={selectedIndex === index + items.length} // Highlight the selected item
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  color: selectedIndex === index + items.length ? 'primary.main' : 'inherit', // Change icon color if active
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                sx={{ 
                  opacity: open ? 1 : 0,
                  fontWeight: selectedIndex === index + items.length ? 'bold' : 'normal', // Change text weight if active
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
