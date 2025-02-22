'use client'

import * as React from 'react';
import { CustomTableInterface } from '@/interfaces/table';
import NexusPagination from './pagination';
import { Stack } from '@mui/material';
import { NexusTable } from './table';


export const CustomTable: React.FC<CustomTableInterface> = ({ header, body, options }) => {
    return (
        <Stack>
            <NexusTable header={header} body={body} />
            {options && options.withPagination ? <NexusPagination /> : ''}
        </Stack>
    );
}