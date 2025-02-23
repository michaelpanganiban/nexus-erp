'use client'

import { CustomTable } from '@/components/common/table/page';
import { USERS } from '@/constants/nexusTableHeader';
import { Divider, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { PageHeader } from '@/components/common/page/page-header';
import { commonWhite, primaryDark, warningDark } from '@/theme/overrides';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
            },
            {
                id: 2,
                name: 'Sarah Panganiban',
                userType: 'Supervisor',
            },
            {
                id: 3,
                name: 'Matteo Sage Panganiban',
                userType: 'Clerk',
            },
        ],
        header: USERS,
        buttons: [
            {
                label: 'Edit',
                onClick: (user: Object) => editUser(user),
                color: primaryDark,
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'small' as 'small' | 'medium' | 'large',
                icon: <EditIcon />
            },
            {
                label: 'Delete',
                onClick: (user: Object) => editUser(user),
                color: warningDark,
                variant: 'outlined' as 'contained' | 'outlined' | 'text',
                size: 'small' as 'small' | 'medium' | 'large',
                icon: <DeleteIcon />
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