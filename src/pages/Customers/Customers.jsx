// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@mui/material/Fab';
import { Stack } from '@mui/material';
// Import der benötigten Components
import { DataTable, UserInfo } from '../../components'
// Import der Daten für die Components
import { columns, data, options } from '../../assets/data'
// Import der benötigten Style-Sheets
import mainStyles from '../../components/Sidebar/styles';
import rootStyles from '../rootStyles';
// Import der benötigten MaterialUI Icons
import AddIcon from '@mui/icons-material/Add';


const Customers = () => {

    const main = mainStyles();
    const root = rootStyles();

    return (
        <div className={root.root}>
            <main className={main.content}>
                <div className={main.toolbar} />
                <Stack direction="row" className={root.heading}>
                    <Typography variant="h4">
                        Kunden
                    </Typography>
                    <Fab variant="extended" color="primary" aria-label="add" size="medium">
                        <AddIcon sx={{ mr: 1 }} />
                        Kunde hinzufügen
                    </Fab>
                </Stack>
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
