import React from 'react';

export interface ButtonConfig {
    label?: string, // Label for the button
    onClick: (row: Record<string, any>) => void,
    color?: string, 
    variant?: 'contained' | 'outlined' | 'text',
    size: 'small' | 'medium' | 'large',
    icon?: React.JSX.Element  
}

export interface CustomTableInterface {
    header: any,
    body: Array<any>,
    options: {
        withPagination: boolean,
        withButtons: boolean
    },
    buttons?: ButtonConfig[]
}