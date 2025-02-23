import SsidChartIcon from '@mui/icons-material/SsidChart';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ScaleIcon from '@mui/icons-material/Scale';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const drawerServices = [
    { 
        text: 'Inventory', 
        icon: <InventoryIcon />,
        link: '/inventory',
        children: [
            {
                id: 1.1,
                text: 'Dashboard',
                link: '/inventory',
                icon: <SsidChartIcon />
            },
            {
                id: 1.2,
                text: 'Products',
                link: '/inventory/products',
                icon: <ShoppingCartIcon />
            },
            {
                id: 1.3,
                text: 'Purchase Order',
                link: '/inventory/purchase-order',
                icon: <StoreIcon />
            },
            {
                id: 1.4,
                text: 'Purchase Delivery',
                link: '/inventory/purchase-delivery',
                icon: <LocalShippingIcon />
            },
            {
                id: 1.5,
                text: 'Reorder Point',
                link: '/inventory/reorder-point',
                icon: <ProductionQuantityLimitsIcon />
            },
            {
                id: 1.6,
                text: 'UOM',
                link: '/inventory/uom',
                icon: <ScaleIcon />
            },
            {
                id: 1.7,
                text: 'Stock In',
                link: '/inventory/stock-in',
                icon: <AddShoppingCartIcon />
            },
            {
                id: 1.8,
                text: 'Stock Out',
                link: '/inventory/stock-out',
                icon: <ShoppingCartCheckoutIcon />
            },
            {
                id: 1.9,
                text: 'Suppliers',
                link: '/inventory/suppliers',
                icon: <PeopleOutlineIcon />
            },
            {
                id: 1.13,
                text: 'Reports',
                link: '/inventory/reports',
                icon: <InsertDriveFileIcon />
            },
            {
                id: 1.12,
                text: 'Logging',
                link: '/inventory/logging',
                icon: <EditNoteIcon />
            }
        ]
    },
    { 
        text: 'Sales',
        icon: <AttachMoneyIcon />,
        link: '/sales',
        children: []
    },
];

export const items = [
    { text: 'Dashboard', icon: <SsidChartIcon />, link: '/dashboard' },
    { text: 'Users', icon: <PeopleAltIcon />, link: '/users' },
    { text: 'Reports', icon: <ContentPasteIcon />, link: '/reports' },
  ];