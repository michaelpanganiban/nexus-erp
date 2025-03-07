import { Components } from '@mui/material';
import { common } from '@mui/material/colors';

export function createComponents (config: any): Components {
  const { palette } = config;
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        body: {
          overflowX: 'hidden',
        },
        html: {
          '*::-webkit-scrollbar': {
            width: '20px',
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#a8bbbf',
            borderRadius: '20px',
            border: '6px solid transparent',
            backgroundClip: 'content-box',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#a8bbbf',
          },
        },
        //Muitree override
        '& .MuiTreeItem-iconContainer': {
          width: 'auto !important',
        },
        '& .MuiTreeItem-content': {
          borderRadius: 3,
          margin: '1px 0',
          padding: '3px !important',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'medium',
        variant: 'contained',
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          paddingTop: 0,
          paddingBottom: 0,
          '& .MuiButtonBase-root-MuiMenuItem-root.Mui-selected': {
            bgcolor: 'red',
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: 'dense',
      },
      styleOverrides: {
        // eslint-disable-next-line no-unused-vars
        root: ({ ownerState }) => ({
          backgroundColor: common.white,
          fieldset: {
            borderColor: palette.divider,
          },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${palette.primary.main}`,
          },
        }),
        input: ({ ownerState }) => ({
          ...(ownerState.type === 'search' && {
            padding: '7px 14px',
          }),
        }),
      },
    },
    MuiFab: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'secondary',
        elevation: 0,
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'outlined' && {
            border: 'none',
            backgroundColor: 'inherit',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(90deg)',
            },
            '& .MuiAccordionSummary-root': {
              flexDirection: 'row-reverse',
            },
          }),
        }),
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: palette.primary.main,
            color: 'white',
          },
        },
      },
    }
  }
}
