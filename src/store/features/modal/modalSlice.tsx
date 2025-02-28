import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ButtonModalConfig, ModalStateInterface } from '@/interfaces/modal';
import React from 'react';


const initialState: ModalStateInterface = {
    isOpen: false,
    content: null,
    modalTitle: null,
    titleIcon: null,
    buttons: []
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal (state, action: PayloadAction<{ content: React.ReactNode, title: string, titleIcon: string, buttons: ButtonModalConfig[] }>) {
            state.isOpen = true,
            state.content = action.payload.content,
            state.modalTitle = action.payload.title,
            state.titleIcon = action.payload.titleIcon,
            state.buttons = action.payload.buttons
        },
        closeModal (state) {
            state.isOpen = false;
            state.content = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
