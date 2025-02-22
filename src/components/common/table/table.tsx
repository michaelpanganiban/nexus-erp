'use client'

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableInterface } from '@/interfaces/table';
import NexusPagination from './pagination';
import { Stack } from '@mui/material';


export const NexusTable: React.FC<TableInterface> = ({ header, body }) => {

    const headerCell = () => {
        return header && header.map((item: string, index: number) => {
            return (
                <TableCell 
                    align="left"
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
            {row && Object.values(row).map((cell, cellIndex) => (
              <TableCell key={cellIndex} align="left">{cell}</TableCell>
            ))}
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