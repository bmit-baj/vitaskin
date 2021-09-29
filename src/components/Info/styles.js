// Import der benötigten MaterialUI Fumktionen
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
          width: "100%",
          padding: theme.spacing(1.5),
          [theme.breakpoints.up('lg')]: {
            height: "400px",
          },
        }
    },
    paper: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '5px',
        alignItems: 'center', 
        justifyContent: 'center',
    },

    component: {
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing('1'),
      },
        width: '100%',
        height: '100%',
    }
}));