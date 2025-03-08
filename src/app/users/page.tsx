'use client'

import { CustomTable } from '@/components/common/table/page';
import { Divider, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { PageHeader } from '@/components/common/page/page-header';
import useUserHandler from '@/handlers/user';
import { useEffect, useState } from 'react';
import { NexusLoader } from '@/components/common/nexusLoader';

export default function Users () {
    // const [loadedData, setLoadedData] = useState({});
    const { tableData } = useUserHandler();

    // useEffect(() => {
    //     if (tableData) {
    //         setLoadedData(tableData);
    //     }
    // }, [tableData]);

    // if (!loadedData) {
    //     return <NexusLoader message={'Loading users'} />;
    // }
    return (
        <Stack>
            <PageHeader icon={GroupIcon} title={'Users'}/>
            <Divider  sx={{ m: 2 }} />
            <CustomTable { ...tableData } />
        </Stack>
    );
}