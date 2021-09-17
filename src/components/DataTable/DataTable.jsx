import React from 'react';
import useStyles from './styles';
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
