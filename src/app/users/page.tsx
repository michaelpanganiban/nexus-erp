'use client'

import { CustomTable } from '@/components/common/table/page';
import { USERS } from '@/constants/nexusTableHeader';
import { Divider, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { PageHeader } from '@/components/common/page/page-header';

export default function Users () {
    const options = {
        withPagination: true
    }

    const usersData = [
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
    ]
    return (
        <Stack>
            <PageHeader icon={GroupIcon} title={'Users'}/>
            <Divider  sx={{ m: 2 }} />
            <CustomTable header={USERS} body={usersData} options={options}/>
        </Stack>
    );
}