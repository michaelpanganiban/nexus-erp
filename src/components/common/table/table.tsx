'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CustomTableInterface } from '@/interfaces/table';
import { Chip, Divider, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { errorLight, errorMain, successLight, successMain } from '@/theme/overrides';


export const NexusTable: React.FC<CustomTableInterface> = ({ header, body, options, buttons }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [selectedRow, setSelectedRow] = useState({});

    const handleClick = (event: React.MouseEvent<HTMLElement>, row: Object) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };
    
    const handleButtonClick = (action: Function) => {
        setAnchorEl(null);
        if (typeof action === 'function') {
            action(selectedRow);
        }
    };

    const headerCell = () => {
        return header && header.map((item: string, index: number) => {
            return (
                <TableCell 
                    align="center"
                    key={index}
                    sx={{
                        color: grey[700]
                    }}
                >
                    {item}
                </TableCell>
            );
        })
    }

    const tableBodyCell = () => {
        return body && body.map((row: Record<string, any>, rowIndex: number) => (
            <TableRow 
                key={rowIndex}
                sx={{
                    backgroundColor: rowIndex % 2 === 0 ? '#f5f5f5' : '#ffffff', // Alternates row colors
                  }}
            >
            {
                // table cells
                row && Object.keys(row).map((columnKey, cellIndex) => (
                    <TableCell key={cellIndex} align="center">
                        {
                            columnKey === 'status' ? 
                                <Chip 
                                    size="small"
                                    label={row[columnKey]} 
                                    color= { 
                                        row[columnKey] === 'Active' ? 'success' : 
                                        row[columnKey] === 'Inactive' ? 'warning' :
                                        'secondary' // default color - add condition as needed
                                    }
                                />
                                : row[columnKey]
                        }
                    </TableCell>
                ))
            }
            {
                // table cells with button
                options.withButtons && (
                    <TableCell align='center'>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={(e) => handleClick(e, row)}
                        >
                            <MoreHorizIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                            'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                            slotProps={{
                                paper: {
                                    style: {
                                    maxHeight: 48 * 4.5,
                                    width: '20ch',
                                    },
                                },
                            }}
                            sx={{
                                '& .MuiPaper-root': {
                                  boxShadow: '1', // Removes the shadow
                                },
                            }}
                        >
                            <MenuItem sx={{ fontWeight: 'bold', color: 'black', pointerEvents: 'none' }}>
                                Actions
                            </MenuItem>
                            <Divider />
                            {
                                buttons?.map((button, btnIndex) => (
                                    <MenuItem
                                        key={btnIndex} 
                                        onClick={
                                            () => handleButtonClick(button.onClick)
                                        }
                                    >
                                        <span style={{ marginRight: '8px', color: '#615c5c' }}>{button.icon}</span>
                                        {button.label}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </TableCell>
                )
            }
          </TableRow>
        ));
    };
    return (
        <Stack>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="UOM">
                    <TableHead>
                        <TableRow>
                            { headerCell() }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableBodyCell() }
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
    );
}