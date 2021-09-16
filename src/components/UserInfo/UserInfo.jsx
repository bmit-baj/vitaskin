import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';




const DataTable = (props) => {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3} component="form">
                <div className={classes.content}>
                    <Stack direction="row" className={classes.header} spacing={3}>
                        <Avatar sx={{ width: 56, height: 56 }}>H</Avatar>
                        <Typography variant='h5'>Max Mustermann</Typography>
                    </Stack>
                    <div className={classes.section}>
                        <Stack direction="row" spacing={3}>
                            <TextField
                                    label="Vorname"
                                    defaultValue="Max"
                                    variant="standard"
                                    className
                            />
                            <TextField
                                    label="Nachname"
                                    defaultValue="Mustermann"
                                    variant="standard"
                            />
                        </Stack>
                    </div>
                    <div className={classes.section}>
                        <Stack direction="row" spacing={3}>
                            <TextField
                                        label="Strasse"
                                        defaultValue="Musterstrasse"
                                        variant="standard"
                                        sx={{
                                            width: '75%',
                                          }}
                            />
                            <TextField
                                        label="Nr."
                                        defaultValue="40"
                                        variant="standard"
                                        sx={{
                                            width: '25%',
                                          }}
                            />
                        </Stack>
                    </div>
                    <div className={classes.section}>
                        <Stack direction="row" spacing={3}>
                            <TextField
                                        label="PLZ"
                                        defaultValue="8049"
                                        variant="standard"
                                        sx={{
                                            width: '25%',
                                          }}
                            />
                            <TextField
                                        label="Ort"
                                        defaultValue="Zürich"
                                        variant="standard"
                                        sx={{
                                            width: '75%',
                                          }}
                            />
                        </Stack>
                    </div>
                    <div className={classes.section}>
                        <TextField
                            label="Telefon"
                            defaultValue="012345678"
                            variant="standard"
                            sx={{
                                width: '100%',
                            }}
                        />
                    </div>
                    <div className={classes.section}>
                        <TextField
                            id="standard-multiline-static"
                            label="Bemerkungen"
                            multiline
                            variant="standard"
                            sx={{
                                width: '100%',
                            }}
                        />
                    </div>
                    <div className={classes.actions}>
                            test
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default DataTable
