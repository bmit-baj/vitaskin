// Import der benötigten React-Components
import React from 'react';
// Import der benötigten Style-Sheets
import useStyles from './styles';
// Import der benötigten MaterialUI Components
import MUIDataTable from "mui-datatables";

const DataTable = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
                <MUIDataTable
                    title={props.title}
                    data={props.data}
                    columns={props.columns}
                    options={props.options}
                />
        </div>
    )
}

export default DataTable
