import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalStateInterface } from '@/interfaces/modal';


const initialState: ModalStateInterface = {
    isOpen: false,
    content: 'Default',
    modalTitle: null,
    titleIcon: null,
    buttons: []
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal (state, action: PayloadAction<ModalStateInterface>) {
            state.isOpen = action.payload.isOpen,
            state.content = action.payload.content,
            state.modalTitle = action.payload.modalTitle,
            state.titleIcon = action.payload.titleIcon,
            state.buttons = action.payload.buttons
        },
        closeModal (state) {
            state.isOpen = false;
            state.content = 'Default';
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
