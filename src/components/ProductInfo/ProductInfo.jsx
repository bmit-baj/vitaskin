// Import der benötigten React-Components
import React from 'react';
// Import der benötigten MaterialUI Components
import Box from '@material-ui/core/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// Import der benötigten MaterialUI Icons
import DeleteIcon from '@mui/icons-material/Delete';
// Import der benötigten Style-Sheets
import useStyles from './styles';

const DataTable = (props) => {

    const classes = useStyles();

    const [mitarbeiter, setMitarbeiter] = React.useState('');
    const handleChangeM = (event) => {
        setMitarbeiter(event.target.value);
    };

    const [katerogie, setKategorie] = React.useState('');
    const handleChangeK = (event) => {
        setKategorie(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Box className={classes.paper} boxShadow={3} component="form">
                <div className={classes.content}>
                    <Stack direction="row" className={classes.header} spacing={3}>
                        <Avatar sx={{ width: 56, height: 56 }}>VC</Avatar>
                        <Typography variant='h5'>Vitaskin Classic</Typography>
                    </Stack>
                    <Stack direction="row" spacing={3} className={classes.section}>
                        <TextField
                            label="Produktname"
                            defaultValue="Max"
                            variant="standard"
                            sx={{
                                width: '100%',
                            }}
                        />
                    </Stack>
                    <Stack direction="row" spacing={3} className={classes.section}>
                        <TextField
                            label="Lieferant"
                            defaultValue="Musterstrasse"
                            variant="standard"
                            sx={{
                                width: '70%',
                            }}
                        />
                        <TextField
                            label="Preis"
                            defaultValue="CHF 40"
                            variant="standard"
                            sx={{
                                width: '30%',
                            }}
                            />
                    </Stack>
                    <Stack direction="row" spacing={3} className={classes.section}>
                        <TextField
                            label="Artikelinhalt"
                            defaultValue="800ml"
                            variant="standard"
                            sx={{
                                width: '30%',
                            }}
                        />
                        <TextField
                            label="Hersteller"
                            defaultValue="VitaSkin"
                            variant="standard"
                            sx={{
                                width: '70%',
                            }}
                        />
                    </Stack>
                    <Stack direction="row" spacing={3} className={classes.section}>
                        <FormControl variant="standard" sx={{width: '50%'}}>
                            <InputLabel id="demo-simple-select-standard-label">Bearbeitet durch</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={mitarbeiter}
                                onChange={handleChangeM}
                                label={mitarbeiter}
                            >
                                <MenuItem value={1}>Mitarbeiter 1</MenuItem>
                                <MenuItem value={2}>Mitarbeiter 2</MenuItem>
                                <MenuItem value={3}>Mitarbeiter 3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{width: '50%'}}>
                            <InputLabel id="demo-simple-select-standard-label">Kategorie</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={katerogie}
                                onChange={handleChangeK}
                                label={katerogie}
                            >
                                <MenuItem value={1}>Produkt</MenuItem>
                                <MenuItem value={2}>Behandlung</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <div className={classes.section}>
                        <TextField
                            id="standard-multiline-static"
                            label="Beschreibung"
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
                                Löschen
                            </Button>
                        </Stack>
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default DataTable
