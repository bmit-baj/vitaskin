// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Import der benötigten Components
import { Chart, StatusCard, Info } from '../../components'
// Import der Daten für die Components
import { SalesYearsData, StatusCardData } from '../../assets/data'
// Import der benötigten Style-Sheets
import mainStyles from '../../components/Sidebar/styles';
import rootStyles from '../rootStyles';


const Dashboard = () => {

    const main = mainStyles();
    const root = rootStyles();


    return (
        <div className={root.root}>
            <main className={main.content}>
                <div className={main.toolbar} />
                <Typography variant="h4" className={root.heading}>
                    Dashboard
                </Typography>
                <Grid container spacing={3}>
                    {StatusCardData.map((item, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={index}>
                            <StatusCard 
                                icon={item.icon}
                                name={item.name}
                                count={item.count}
                                path={item.path}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={12} lg={9}>
                        <Chart 
                            type='area'
                            options={SalesYearsData.options}
                            series={SalesYearsData.series}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={3}>
                        <Info />
                    </Grid>
                </Grid>    
            </main>
        </div>
    )
}

export default Dashboard
