import React from 'react'
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import ReactApexCharts from 'react-apexcharts'

const GraphSalesCard = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3}>
                <div className={classes.component}>
                    <ReactApexCharts 
                        options={props.options} 
                        series={props.series} 
                        type={props.type}
                        width='100%'
                        height='100%'
                    />
                </div>
            </Box>
        </div>
    )
}

export default GraphSalesCard
