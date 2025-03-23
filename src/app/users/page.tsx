'use client'

import { CustomTable } from '@/components/common/table/page';
import { Button, Divider, Stack } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { PageHeader } from '@/components/common/page/page-header';
import useUserHandler from '@/handlers/user';
import { commonWhite, primaryDark } from '@/theme/overrides';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function Users () {
    const { tableData, openAddUserModal } = useUserHandler();
    return (
        <Stack>
            <PageHeader icon={GroupIcon} title={'Users'}/>
            <Divider  sx={{ m: 2 }} />
            <Stack direction="row" spacing={2} justifyContent="flex-end" marginBottom={1}>
                <Button 
                    variant="contained" 
                    sx={{
                        color: commonWhite,
                        backgroundColor: primaryDark,
                    }}
                    size="medium"
                    onClick={() => {openAddUserModal()}}
                    startIcon={<PersonAddAltIcon />}
                >
                    New User
                </Button>
            </Stack>
            <CustomTable { ...tableData } />
        </Stack>
    );
}