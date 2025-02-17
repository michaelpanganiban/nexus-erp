'use client';

import React, { useState } from 'react';
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import { drawerServices, items } from '@/constants/drawerItems';
import {KeyboardArrowRight, KeyboardArrowDown} from '@mui/icons-material';

interface DrawerItemsProps {
  open: boolean;
}

export const DrawerItems: React.FC<DrawerItemsProps> = ({ open }) => {
  // State to keep track of the selected item
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const router = useRouter();

  // Function to handle item click
  const handleListItemClick = (index: number, page: string) => {
    router.push(page)
    setSelectedIndex(index);
  };

  const [openService, setOpenService] = useState<{ [key: string]: boolean }>({});
  const handleClick = (serviceText: string) => {
    setOpenService((prevState) => ({
      ...prevState,
      [serviceText]: !prevState[serviceText],
    }));
  };

  return (
    <>
      <List>
        {items.map((item, index) => (
          <ListItem 
            key={item.text} 
            disablePadding 
            sx={{ display: 'block' }}
            onClick={() => handleListItemClick(index, item.link)} // Set active item on click
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
        {drawerServices.map((item, index) => (
          <ListItem
            key={index} // Ensure unique keys
            disablePadding 
            sx={{ display: 'block' }}
            onClick={item.children ? undefined : () => handleListItemClick(index, item.link)} // Set active item on click
          >
            <ListItemButton
              selected={selectedIndex === index + items.length} // Highlight the selected item
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => handleClick(item.text)}
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
              { item.children.length > 0 && (openService[item.text] ? <KeyboardArrowDown /> : <KeyboardArrowRight />)}
            </ListItemButton>
            { item.children.length > 0 && (
                <Collapse in={openService[item.text]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItemButton 
                        sx={{ pl: 4 }} 
                        key={child.id} 
                        onClick={() => handleListItemClick(child.id, child.link)}
                        selected={selectedIndex === child.id}
                      >
                        <ListItemIcon>
                          {child.icon}
                        </ListItemIcon>
                        <ListItemText primary={child.text} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
};
