'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalDialog } from '@/store/features/modal/modalSlice';
import { RootState } from '@/store/store';
import { Divider } from '@mui/material';

export const NexusDialog = () => {
    const dispatch = useDispatch();
    const { isDialogOpen, dialogContent, dialogTitle, color } = useSelector((state: RootState) => state.modal.dialog);

    const handleClose = () => {
        dispatch(closeModalDialog())
    };

  return (
    <React.Fragment>
      <Dialog
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color }}>
          { dialogTitle }
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { dialogContent }
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
