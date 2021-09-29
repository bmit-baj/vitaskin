// Material-UI Icons
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import EcoIcon from '@material-ui/icons/Eco';
import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';

// StatusCard Data - Dashboard
const StatusCardData = [
    {
        name: 'Kunden',
        icon: <PeopleIcon fontSize="large"/>,
        count: '2009',
        path: '',
    },
    {
        name: 'Produkte',
        icon: <SpaIcon fontSize="large"/>,
        count: '3789',
        path: '',
    },
    {
        name: 'Verkäufe',
        icon: <ShoppingCartIcon fontSize="large"/>,
        count: '2669',
        path: '',
    },
    {
        name: 'Behandlungen',
        icon: <EcoIcon fontSize="large"/>,
        count: '7430',
        path: '',
    }
];

export default StatusCardData