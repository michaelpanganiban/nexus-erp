'use client'

import { CustomTable } from '@/components/common/table/page';
import { Divider, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { PageHeader } from '@/components/common/page/page-header';
import useUserHandler from '@/handlers/user';

export default function Users () {
    const { tableData } = useUserHandler();
    
    return (
        <Stack>
            <PageHeader icon={GroupIcon} title={'Users'}/>
            <Divider  sx={{ m: 2 }} />
            <CustomTable { ...tableData } />
        </Stack>
    );
}