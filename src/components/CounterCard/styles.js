import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
          margin: theme.spacing(2),
          width: theme.spacing(40),
          height: theme.spacing(26),
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
        marginRight: theme.spacing(8),
        fontSize: 40,
    },
    info: {
        textAlign: 'center',
    }
}));