import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SpaIcon from '@material-ui/icons/Spa';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const categories = [
    {   
        id: 1, 
        text: 'Dashboard', 
        icon: <DashboardIcon />,
    },
    {   
        id: 2, 
        text: 'Kunden', 
        icon: <PeopleIcon />,
    },
    {   
        id: 3, 
        text: 'Produkte', 
        icon: <SpaIcon />,
    },
    {   
        id: 4, 
        text: 'Verkäufe', 
        icon: <ShoppingCartIcon />,
    },
    {   
        id: 5, 
        text: 'Statistik', 
        icon: <ShowChartIcon />,
    },
];

export default categories