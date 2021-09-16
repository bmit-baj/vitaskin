import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
          width: "100%",
          height: "75vh",
          }
    },
    paper: {
        display: 'flex',
        padding: theme.spacing(1),
        backgroundColor: 'white',
        border: '1px solid #eee',
        borderRadius: '5px',
    },
    header: {
        width: '100%',
        display: 'flex',
        
        alignItems: 'center',
        marginBottom: theme.spacing(3)
    },
    content: {
        margin: theme.spacing(2)
    },
    section: {
        marginTop: theme.spacing(2)
    },
    actions: {
        display: 'flex',
        alignContent: 'bottom',
    }
}));