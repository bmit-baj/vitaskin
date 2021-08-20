// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Grid from '@material-ui/core/Grid';
// Import der benötigten Components
import {  } from '../../components'
// Import der Daten für die Components
import {  } from '../../assets/data'
// Import der benötigten Style-Sheets
import mainStyles from '../../components/Sidebar/styles';
import rootStyles from '../rootStyles';

const Customers = () => {

    const main = mainStyles();
    const root = rootStyles();

    return (
        <div className={root.root}>
            <main className={main.content}>
                <div className={main.toolbar} />
                
            </main>
        </div>
    )
}

export default Customers
