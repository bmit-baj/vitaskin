// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// Import der benötigten Style-Sheets
import useStyles from './styles';


const CounterCard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3} onClick={props.path}>
                <div className={classes.icon}>
                    {props.icon}
                </div>
                <div className={classes.info}>
                    <Typography variant='h4'>
                        {props.count}
                    </Typography>
                    <Typography variant='subtitle1'>
                        {props.name}
                    </Typography>
                </div>
            </Box>
        </div>
    )
}

export default CounterCard
