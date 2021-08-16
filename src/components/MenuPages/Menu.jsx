import React from 'react'
import useStyles from './styles';
import Box from '@material-ui/core/Box';

const Menu = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3}>
                <div className={classes.component}>
                    test
                </div>
            </Box>
        </div>
    )
}

export default Menu

