import { NexusTable } from '@/components/common/table/page';
import { UOM } from '@/constants/nexusTableHeader';

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
    return (
        <NexusTable header={UOM} body={data}/>
    );
}