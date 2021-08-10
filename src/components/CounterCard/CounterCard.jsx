import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import Typography from '@material-ui/core/Typography';
import PeopleIcon from '@material-ui/icons/People';

const CounterCard = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3}>
                <div className={classes.icon}>
                    <PeopleIcon />
                </div>
                <div className={classes.info}>
                    <Typography variant='h3'>2002</Typography>
                    <Typography variant='subtitle1'>Kunden</Typography>
                </div>
            </Box>
        </div>
    )
}

export default CounterCard
