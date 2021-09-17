import { makeStyles } from '@material-ui/core/styles';
import { SmartDisplay } from '@mui/icons-material';

export default makeStyles((theme) => ({
    root: {
        backgroundColor: '#fafafa',
        minHeight: '100vh',
    },
    heading: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
  }));
