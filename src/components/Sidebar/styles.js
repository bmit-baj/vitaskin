// Import der benötigten MaterialUI Funktionen
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 230;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          backgroundColor: 'white',
          color: 'black',
        },
        backgroundColor: 'white',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between'
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      // necessary for content to be below app bar
      toolbar: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textTransform: 'uppercase',
          ...theme.mixins.toolbar,
      },
      drawerPaper: {
        width: drawerWidth,
        shadowColor: "black",
        shadowOffset: { width: 5, height: 2 }, // change this for more shadow
        shadowOpacity: 0.4,
        shadowRadius: 6,
      },
      content: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
        },
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      siteName: {
        marginLeft: theme.spacing(2.5)
      },
      Toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.up('sm')]: {
          justifyContent: 'flex-end',
        },
      }
  }));
