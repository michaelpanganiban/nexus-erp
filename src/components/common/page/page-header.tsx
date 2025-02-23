import React from 'react';
import { PageHeaderInterface } from '@/interfaces/page'
import { Typography } from '@mui/material';
import { primaryDark } from '@/theme/overrides';

export const PageHeader: React.FC<PageHeaderInterface> = ({icon: Icon, title}) =>{
    return (
        <Typography variant='h5'>
            <Icon sx={{mr: 2, color: primaryDark }} /> {title}
        </Typography>
    );
}