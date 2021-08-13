// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Grid from '@material-ui/core/Grid';
// Import der benötigten Components
import { Chart, StatusCard, TopTable } from '../../components'
// Import der Daten für die Components
import { SalesYearsData, StatusCardData, TopProductsColumns, TopProductsRows, TopServicesColumns, TopServicesRows } from '../../assets/data'
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
                    <Grid container className={root.parent}>
                        <Grid container xs={12} sm={12} lg={6}>
                                {StatusCardData.map((item, index) => (
                                    <Grid item xs={12} sm={6} lg={6} key={index} className={root.element}>
                                        <StatusCard 
                                            icon={item.icon}
                                            name={item.name}
                                            count={item.count}
                                            path={item.path}
                                        />
                                    </Grid>
                                ))}
                        </Grid>
                        <Grid container  xs={12} sm={12} lg={6}>
                                <Grid item xs={12} sm={12} lg={12} className={root.element}>
                                    <Chart 
                                        type='area'
                                        options={SalesYearsData.options}
                                        series={SalesYearsData.series}
                                    />
                                </Grid>
                        </Grid>

                        <Grid container  xs={12} sm={12} lg={6}>
                                <Grid item xs={12} sm={12} lg={12} className={root.element}>
                                    <TopTable 
                                        title='Top Produkte'
                                        rows={TopProductsRows}
                                        columns={TopProductsColumns}
                                    />
                                </Grid>
                        </Grid>   
                        <Grid container  xs={12} sm={12} lg={6}>
                                <Grid item xs={12} sm={12} lg={12} className={root.element}>
                                    <TopTable 
                                        title='Top Services'
                                        rows={TopServicesRows}
                                        columns={TopServicesColumns}
                                    />
                                </Grid>
                        </Grid>    
                    </Grid>
            </main>
        </div>
    )
}

export default Dashboard
