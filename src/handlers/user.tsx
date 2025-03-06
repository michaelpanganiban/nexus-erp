import { USERS } from '@/enums/nexusTableHeader';
import { closeModal, openModal, openModalDialog } from '@/store/features/modal/modalSlice';
import { commonWhite, primaryMain, warningDark } from '@/theme/overrides';
import { useDispatch } from 'react-redux';
import { ComponentRegistryInterface } from '@/interfaces/componentRegistry';
import { ModalStateInterface } from '@/interfaces/modal';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const useUserHandlers = () => {
    const dispatch = useDispatch();

    // TODO: replace with actual data from API
    // do mapping
    const tableData = {
        options: {
            withPagination: true,
            withButtons: true
        },
        body :[
            {
                id: 1,
                name: 'John Michael Panganiban',
                userType: 'Admin',
                status: 'Active'
            },
            {
                id: 2,
                name: 'Sarah Panganiban',
                userType: 'Supervisor',
                status: 'Suspended'
            },
            {
                id: 3,
                name: 'Matteo Sage Panganiban',
                userType: 'Clerk',
                status: 'Active'
            },
            {
                id: 4,
                name: 'Salvacion Gavillo',
                userType: 'Clerk',
                status: 'Inactive'
            },
        ],
        header: USERS,
        buttons: [
            {
                label: 'Edit',
                onClick: (user: Object) => editUser(user),
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'small' as 'small' | 'medium' | 'large',
                icon: <DriveFileRenameOutlineIcon />
            },
            {
                label: 'Delete',
                onClick: (user: Object) => deleteUser(user),
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'small' as 'small' | 'medium' | 'large',
                icon: <DeleteOutlineIcon />
            },
            {
                label: 'Change Status',
                onClick: (user: Object) => changeUserStatus(user),
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'small' as 'small' | 'medium' | 'large',
                icon: <AutorenewIcon />
            }
        ]
    }

    /**
     * opens modal for editing a user
     * @param user
     */
    const editUser = (user: Object) => {
        const buttons = [
            {
                label: 'Save Changes',
                action: 'saveEditUser',
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'medium' as 'small' | 'medium' | 'large',
                backgroundColor: primaryMain,
                color: commonWhite,
            }
        ]
        
        const modalDetails: ModalStateInterface = {
            isOpen: true,
            content: 'UserFormComponent' as keyof ComponentRegistryInterface,
            modalTitle: 'Edit User',
            titleIcon: 'Group',
            buttons
        }
        dispatch(openModal(modalDetails))
    }

    /**
     * update user data
     * @param user 
     */
    const handleUpdateUser = (user: Object | null) => {
        console.log(user);
        dispatch(closeModal());
    }

    /**
     * delete user confirmation
     * @param user
     */
    const deleteUser = (user: Object) => {
        const dialogState = {
            isDialogOpen: true,
            dialogTitle: 'Delete User Data',
            icon: 'Delete',
            dialogContent: 'Are you sure you want to delete this user? This action cannot be undone.',
            color: warningDark
        }
        dispatch(openModalDialog(dialogState))
    } 

    const changeUserStatus = (user: Object) => {
        const dialogState = {
            isDialogOpen: true,
            dialogTitle: 'Change User Status',
            icon: 'Warning',
            dialogContent: 'Are you sure you want to change the status of this user?',
            color: warningDark
        }
        dispatch(openModalDialog(dialogState))
    }
    return { editUser, tableData, deleteUser, handleUpdateUser }
}

export default useUserHandlers;

   