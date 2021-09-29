// Import der benötigten React-Components
import React from 'react'
// Import der benötigten Style-Sheets
import useStyles from './styles';
// Import der benötigten MaterialUI Components
import Box from '@material-ui/core/Box';
import { Divider, Typography } from '@material-ui/core';

const Menu = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3}>
                <div className={classes.component}>
                    <Typography variant="h6">Info</Typography>
                        <Typography>Server: Offline</Typography>
                        <Divider />
                        <Typography>Verbindung: inaktiv</Typography>
                        <Divider />
                        <Typography>Version: v2.0 </Typography>
                </div>
            </Box>
        </div>
    )
}

export default Menu

