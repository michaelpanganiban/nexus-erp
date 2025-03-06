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
import { Divider, IconButton, Typography } from '@mui/material';
import { iconMap } from '@/constants/iconMapping';
import { commonBlack, commonWhite } from '@/theme/overrides';

export const NexusDialog = () => {
    const dispatch = useDispatch();
    const { isDialogOpen, dialogContent, dialogTitle, color, icon } = useSelector((state: RootState) => state.modal.dialog);
    const IconComponent = iconMap[icon as keyof typeof iconMap] || '';
    
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
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title" sx={{ color, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            {dialogTitle}
          </Typography>
          <IconButton aria-label="delete" color="error" size="large">
            {IconComponent}
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            { dialogContent }
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button onClick={handleClose} 
            sx={{
              backgroundColor: commonWhite,
              color: commonBlack,
              borderColor: commonBlack,
              '&:hover': {
                backgroundColor: commonWhite,
                color: commonBlack,
              }
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus color='error'>
            Confirm Action
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
