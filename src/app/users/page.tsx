'use client'

import { CustomTable } from '@/components/common/table/page';
import { USERS } from '@/constants/nexusTableHeader';
import { Divider, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { PageHeader } from '@/components/common/page/page-header';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Users () {
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
                icon: <PersonOutlineIcon />
            },
            {
                label: 'Delete',
                onClick: (user: Object) => editUser(user),
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'small' as 'small' | 'medium' | 'large',
                icon: <DeleteOutlineIcon />
            }
        ]
    }

    // edit user
    const editUser = (user: Object) => {
        console.log(user)
    }
    
    return (
        <Stack>
            <PageHeader icon={GroupIcon} title={'Users'}/>
            <Divider  sx={{ m: 2 }} />
            <CustomTable { ...tableData } />
        </Stack>
    );
}