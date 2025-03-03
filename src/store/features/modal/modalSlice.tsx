import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalStateInterface, ModalDialogStateInterface } from '@/interfaces/modal';


const initialState: { modal: ModalStateInterface, dialog: ModalDialogStateInterface } = {
    modal: {
        isOpen: false,
        content: 'Default',
        modalTitle: null,
        titleIcon: null,
        buttons: []
    },
    dialog: {
        isDialogOpen: false,
        dialogTitle: '',
        icon: null,
        dialogContent: '',
        color: ''
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal (state, action: PayloadAction<ModalStateInterface>) {
            state.modal.isOpen = action.payload.isOpen,
            state.modal.content = action.payload.content,
            state.modal.modalTitle = action.payload.modalTitle,
            state.modal.titleIcon = action.payload.titleIcon,
            state.modal.buttons = action.payload.buttons
        },
        closeModal (state) {
            state.modal.isOpen = false;
            state.modal.content = 'Default';
        },
        openModalDialog (state, action: PayloadAction<ModalDialogStateInterface>) {
            state.dialog.isDialogOpen  = action.payload.isDialogOpen;
            state.dialog.dialogTitle  = action.payload.dialogTitle;
            state.dialog.dialogContent  = action.payload.dialogContent;
            state.dialog.color  = action.payload.color;
            state.dialog.icon  = action.payload.icon;
        },
        closeModalDialog (state) {
            state.dialog.isDialogOpen = false;
        }
    },
});

export const { openModal, closeModal, openModalDialog, closeModalDialog } = modalSlice.actions;
export default modalSlice.reducer;
