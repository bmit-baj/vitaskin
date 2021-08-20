import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
          width: "100%",
          height: theme.spacing(18),
          }
    },
    paper: {
        display: 'flex',
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '15px',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    icon: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
        marginRight: theme.spacing(5),
    },
    info: {
        textAlign: 'center',
    }
}));