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
        borderRadius: '15px',
    },
}));