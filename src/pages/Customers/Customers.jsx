// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Grid from '@material-ui/core/Grid';
// Import der benötigten Components
import { DataTable, UserInfo } from '../../components'
// Import der Daten für die Components
import { columns, data, options } from '../../assets/data'
// Import der benötigten Style-Sheets
import mainStyles from '../../components/Sidebar/styles';
import rootStyles from '../rootStyles';
import Typography from '@material-ui/core/Typography';

const Customers = () => {

    const main = mainStyles();
    const root = rootStyles();

    return (
        <div className={root.root}>
            <main className={main.content}>
                <div className={main.toolbar} />
                <div className={root.heading}>
                    <Typography variant="h4">
                        Kunden
                    </Typography>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={7}>
                        <DataTable
                            title="Kundenliste"
                            data={data}
                            options={options}
                            columns={columns}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={5}>
                        <UserInfo />
                    </Grid>
                </Grid>

            </main>
        </div>
    )
}

export default Customers
