// Import der benötigten React-Components
import React from 'react'
// Import der benötigten MaterialUI Components
import Box from '@material-ui/core/Box';
// Import der benötigten ApexChart Components
import ReactApexCharts from 'react-apexcharts' // https://apexcharts.com/
// Import der benötigten Style-Sheets
import useStyles from './styles';



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
