'use client'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, styled } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { closeModal } from '@/store/features/modal/modalSlice';
import { primaryDark } from '@/theme/overrides';
import GroupIcon from '@mui/icons-material/Group';
import useModal from '@/handlers/modal';
import { ComponentRegistry } from '@/constants/componentRegistry';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));

export const NexusModal = () => {
    const dispatch = useDispatch();
    const { handleButtonClick } = useModal();
    const { isOpen, content, modalTitle, buttons, titleIcon } = useSelector((state: RootState) => state.modal.modal);
    
    if(!content)
        return;
    
    const Content = ComponentRegistry[content];

    const iconMap = {
        Group: <GroupIcon sx={{ verticalAlign: 'middle' }} />,
        // Add other icon mappings as needed
    };    
    const IconComponent = iconMap[titleIcon as keyof typeof iconMap] || '';

    return (
        <React.Fragment>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={isOpen}
                disableEscapeKeyDown
                slotProps={{
                    backdrop: {
                      onClick: (e) => e.stopPropagation(), 
                    },
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <span style={{ color: primaryDark }}>{IconComponent} { modalTitle }</span>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={ () => dispatch(closeModal()) }
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    { Content && <Content /> }
                </DialogContent>
                <DialogActions>
                    <Stack direction="row" spacing={2}>
                        {
                            buttons && buttons.map((item, btnIndex) => (
                                <Button
                                    key={btnIndex}
                                    variant= {item.variant}
                                    size={item.size}
                                    sx={{
                                        color: item.color,
                                        backgroundColor: item.backgroundColor,
                                    }}
                                    onClick={
                                        () => handleButtonClick(item.action, item)
                                    }
                                >
                                    {item.label}
                                </Button>
                            ))
                        }
                    </Stack>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}