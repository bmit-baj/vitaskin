// Material-UI Icons
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

//Navigation-Menu Data
const categories = [
    {   
        id: 1, 
        text: 'Dashboard', 
        icon: <DashboardIcon />,
        path : '/'
    },
    {   
        id: 2, 
        text: 'Kunden', 
        icon: <PeopleIcon />,
        path: '/kunden'
    },
    {   
        id: 3, 
        text: 'Dienstleistungen', 
        icon: <SpaIcon />,
        path: '/produkte'
    },
    {   
        id: 4, 
        text: 'Verkäufe', 
        icon: <ShoppingCartIcon />,
        path: '/verkaeufe'
    },
    {   
        id: 5, 
        text: 'Statistik', 
        icon: <ShowChartIcon />,
        path: '/statistik'
    },
];

export default categories