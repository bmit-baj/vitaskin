import React from 'react';
import mainStyles from '../../components/Sidebar/styles';
import rootStyles from '../rootStyles';
import Card from '../../components/CounterCard/CounterCard';



const Dashboard = () => {

    const main = mainStyles();
    const root = rootStyles();


    return (
        <div className={root.root}>
            <main className={main.content}>
                <div className={main.toolbar} />
                <Card />
            </main>
        </div>
    )
}

export default Dashboard
