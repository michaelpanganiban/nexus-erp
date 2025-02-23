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
import { Button, Stack } from '@mui/material';


export const NexusTable: React.FC<CustomTableInterface> = ({ header, body, options, buttons }) => {

    const headerCell = () => {
        return header && header.map((item: string, index: number) => {
            return (
                <TableCell 
                    align="center"
                    key={index}
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText'
                    }}
                >
                    {item}
                </TableCell>
            );
        })
    }

    const tableBodyCell = () => {
        return body && body.map((row: Array<any>, rowIndex: number) => (
            <TableRow 
                key={rowIndex}
                sx={{
                    backgroundColor: rowIndex % 2 === 0 ? '#f5f5f5' : '#ffffff', // Alternates row colors
                  }}
            >
            {
                // table cells
                row && Object.values(row).map((cell, cellIndex) => (
                    <TableCell key={cellIndex} align="center">{cell}</TableCell>
                ))
            }
            {
                // table cells with button
                options.withButtons && (
                    <TableCell align="center">
                      {
                        buttons?.map((button, btnIndex) => (
                            <Button
                                key={btnIndex}
                                title= {button.label}
                                variant={button.variant || 'contained'}
                                size= {button.size || 'small'}
                                sx={{
                                    color: button.color || 'commonWhite',
                                    m: 1
                                }}
                                startIcon={button.icon}
                                onClick={() => button.onClick(row)} // Pass the row to the button
                            >
                                {button.label}
                            </Button>
                        ))
                    }
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