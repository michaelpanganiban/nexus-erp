import { ComponentRegistryInterface } from './componentRegistry';
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
    content: keyof ComponentRegistryInterface,
    modalTitle: string | null,
    titleIcon: string | null,
    buttons: ButtonModalConfig[]
}

export interface ModalDialogStateInterface {
    isDialogOpen: boolean,
    dialogTitle: string,
    icon: string | null,
    dialogContent: string,
    color: string
}