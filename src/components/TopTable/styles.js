import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
          width: "100%",
          padding: theme.spacing(1.5),
          [theme.breakpoints.up('lg')]: {
            height: "350px",
          },
          [theme.breakpoints.down('lg')]: {
            height: "300px",
          },
        },
    },
    paper: {
        display: 'flex',
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '15px',
        alignItems: 'center', 
        justifyContent: 'center',
    },

    component: {
      [theme.breakpoints.up('lg')]: {
        padding: theme.spacing('1'),
      },
        width: '100%',
        height: '100%',
    },
    heading: {
      paddingBottom: theme.spacing(1),
    },
    table: {
      height: '85%'
    }
}));