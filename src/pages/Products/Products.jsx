// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@mui/material/Fab';
// Import der benötigten Components
import { DataTable, ProductInfo } from '../../components'
// Import der Daten für die Components
import { columns, data, options } from '../../assets/data'
// Import der benötigten MaterialUI Icons
import AddIcon from '@mui/icons-material/Add';
// Import der benötigten Style-Sheets
import mainStyles from '../../components/Sidebar/styles';
import rootStyles from '../rootStyles';
import { Stack } from '@mui/material';


const Products = () => {

    const main = mainStyles();
    const root = rootStyles();

    return (
        <div className={root.root}>
            <main className={main.content}>
                <div className={main.toolbar} />
                <Stack direction="row" className={root.heading}>
                    <Typography variant="h4">
                        Dienstleistungen
                    </Typography>
                    <Fab variant="extended" color="primary" aria-label="add" size="medium">
                        <AddIcon sx={{ mr: 1 }} />
                        Dienstleistung hinzufügen
                    </Fab>
                </Stack>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} lg={7}>
                        <DataTable
                            title="Produktliste"
                            data={data}
                            options={options}
                            columns={columns}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={5}>
                        <ProductInfo />
                    </Grid>
                </Grid>

            </main>
        </div>
    )
}

export default Products
