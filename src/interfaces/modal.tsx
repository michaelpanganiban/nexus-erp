import React from 'react';

export interface ButtonModalConfig {
    label?: string,
    action: string | null,
    backgroundColor?: string,
    color?: string, 
    variant?: 'contained' | 'outlined' | 'text',
    size: 'small' | 'medium' | 'large',
}

export interface ModalStateInterface {
    isOpen: boolean,
    content: React.ReactNode | null,
    modalTitle: string | null,
    titleIcon: string | null,
    buttons: ButtonModalConfig[]
}