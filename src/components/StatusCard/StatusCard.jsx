import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';

const CounterCard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3} onClick={props.path}>
                <div className={classes.icon}>
                    {props.icon}
                </div>
                <div className={classes.info}>
                    <Typography variant='h3'>
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
