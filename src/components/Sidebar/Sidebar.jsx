// Import der benötigten React-Components
import React from 'react';
import { useHistory } from 'react-router-dom'
// Import der benötigten MaterialUI Components
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
// Import der benötigten MaterialUI Icons
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
// Import der benötigten Style-Sheets
import useStyles from './styles';
import { withStyles } from '@material-ui/core/styles';
// Import der Daten für die Components
import { NavigationData } from '../../assets/data'

const Sidebar = (props) => {

    const StyledListItem = withStyles({
        root: {
          "&.Mui-selected": {
            backgroundColor: ' #e3f7f8',
            borderRight: '1mm solid #2ea3f2'
          }
        },
      })(ListItem);

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const history = useHistory();
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
          <div className={classes.toolbar}>
              <Typography variant="h5">
                  VitaSkin
              </Typography>
          </div>
          <Divider />
          <List>
            {NavigationData.map((categories) => (
              <StyledListItem
                button 
                selected={selectedIndex === categories.id} 
                key={categories.text} 
                onClick={(event) => {handleListItemClick(event, categories.id); history.push(categories.path)}}
              >
                <ListItemIcon>
                    {categories.icon}
                </ListItemIcon>
                <ListItemText primary={categories.text} />
              </StyledListItem>
            ))}
          </List>
        </div>
    );
    
    const container = window !== undefined ? () => window().document.body : undefined;

    var time = new Date().toLocaleTimeString();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.Toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>{time}</Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="Menu">
                <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                    {drawer}
                </Drawer>
                </Hidden>
            </nav>
      </div>
    )
}

export default Sidebar
