// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Box from '@material-ui/core/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// Import der benötigten MaterialUI Icons
import DeleteIcon from '@mui/icons-material/Delete';
// Import der benötigten Style-Sheets
import useStyles from './styles';


const DataTable = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3} component="form">
                <div className={classes.content}>
                    <Stack direction="row" className={classes.header} spacing={3}>
                        <Avatar sx={{ width: 56, height: 56 }}>MM</Avatar>
                        <Typography variant='h5'>Max Mustermann</Typography>
                    </Stack>
                    <Stack direction="row" spacing={3} className={classes.section}>
                        <TextField
                            label="Vorname"
                            defaultValue="Max"
                            variant="standard"
                            sx={{
                                width: '50%',
                            }}
                        />
                        <TextField
                            label="Nachname"
                            defaultValue="Mustermann"
                            variant="standard"
                            sx={{
                                width: '50%',
                            }}
                        />
                    </Stack>
                    <Stack direction="row" spacing={3} className={classes.section}>
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
                    <Stack direction="row" spacing={3} className={classes.section}>
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
                            maxRows={5}
                            sx={{
                                width: '100%',
                            }}
                        />
                    </div>
                    <div className={classes.actions}>
                        <Stack direction="row" spacing={3}>
                            <Button variant="contained">
                                Aktualisieren
                            </Button>
                            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
                                Kunde Löschen
                            </Button>
                        </Stack>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default DataTable
