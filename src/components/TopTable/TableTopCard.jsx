import * as React from 'react'
import useStyles from './styles';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';
import Typography from '@material-ui/core/Typography';


const TableTopProducts = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3}>
                <div className={classes.component}>
                  <div className={classes.heading}>
                    <Typography variant='h6'>
                        {props.title}
                    </Typography>
                  </div>
                  <div className={classes.table}>
                    <DataGrid
                      rows={props.rows}
                      columns={props.columns}
                      pageSize={5}
                      disableSelectionOnClick
                      height='10%'
                    />
                  </div>
                </div>
            </Box>
        </div>
    )
}

export default TableTopProducts
