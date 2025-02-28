import { USERS } from '@/constants/nexusTableHeader';
import { closeModal, openModal } from '@/store/features/modal/modalSlice';
import { commonWhite, primaryMain } from '@/theme/overrides';
import { useDispatch } from 'react-redux';

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
            },
            {
                label: 'Delete',
                onClick: (user: Object) => deleteUser(user),
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'small' as 'small' | 'medium' | 'large',
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
        const modalDetails = {
            content: '<b>Hi</b>',
            title: 'Edit User',
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
        console.log(user)
    } 

    return { editUser, tableData, deleteUser, handleUpdateUser }
}

export default useUserHandlers;

   