import { PageHeader } from '@/components/common/page/page-header';
import { CustomTable } from '@/components/common/table/page';
import { UOM } from '@/enums/nexusTableHeader';
import ScaleIcon from '@mui/icons-material/Scale';
import { Divider, Stack } from '@mui/material';

const data = [
    {
        id: 1,
        uom: 'Liter',
        symbol: 'L'
    },
    {
        id: 2,
        uom: 'Kilogram',
        symbol: 'kg'
    },
    {
        id: 3,
        uom: 'Galons',
        symbol: 'g'
    },
    
]

export default function Uom () {
    const options = {
        withPagination: false
    }
    return (
        <Stack>
            <PageHeader icon={ScaleIcon} title={'Unit of Measurements'}/>
            <Divider  sx={{ m: 2 }} />
            <CustomTable header={UOM} body={data} options={options}/>
        </Stack>
    );
}