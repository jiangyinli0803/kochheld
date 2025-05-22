import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {
    useState,
    useMemo,
    Fragment,
    type FormEvent,
    type ChangeEvent,
    type SyntheticEvent
} from "react";
import Select, {type SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl, {useFormControl} from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import Snackbar, {type SnackbarCloseReason } from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import axios from "axios";

import type {IRecipe} from "../interfaces/IRecipe.ts";


function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = useMemo(() => {
        if (focused) {
            return 'Geben Sie die Zutaten getrennt mit einem Komma ein.';
        }

        return ' ';
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

function Entry() {
    const [name, setName] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [ingredients, setIngredients] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [instruction, setInstruction] = useState<string>('');
    const [open, setOpen] = useState(false);

    function handleName(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value as string);
    }

    function handleCategory(e: SelectChangeEvent) {
        setCategory(e.target.value as string);
    }

    function handleIngredients(e: ChangeEvent<HTMLInputElement>) {
        setIngredients(e.target.value as string);
    }

    function handleDuration(e: ChangeEvent<HTMLInputElement>) {
        setDuration(e.target.value as string);
    }

    function handleDescription(e: ChangeEvent<HTMLInputElement>) {
        setDescription(e.target.value as string);
    }

    function handleInstruction(e: ChangeEvent<HTMLInputElement>) {
        setInstruction(e.target.value as string);
    }

    const handleClose = (
        _event: SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = <Fragment>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    </Fragment>;

    const theme = useTheme();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const body: IRecipe = {
            name: name.trim(),
            category: category,
            image: '',
            ingredients: ingredients.trim().split(','),
            duration: +duration,
            description: description,
            instruction: instruction
        };

        axios.post('/api/recipe', body)
            .then(() => setOpen(true))
            .catch(err => console.log(err))
    };

    return <>
        <Container>
            <Box component={'div'} sx={{paddingTop: 12}}>
                <Typography variant={'h3'}>Ergänze unsere Sammlung mit einem neuen Rezept.</Typography>
                <br />
                <form onSubmit={handleSubmit}>
                    <Grid container columnSpacing={2} sx={{mt: 4, mb: 12}}>
                        <Grid size={{xs: 12, sm: 7, md: 8}} sx={{mb: 4}}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                value={name}
                                onChange={handleName}
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{xs: 12, sm: 5, md: 4}} sx={{mb: 4}}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id={'category-label'}>Kategorie</InputLabel>
                                    <Select
                                        id={'category'}
                                        labelId={'category-label'}
                                        label={'Kategorie'}
                                        value={category}
                                        onChange={handleCategory}
                                    >
                                        <MenuItem value={'BREAKFAST'}>Frühstück</MenuItem>
                                        <MenuItem value={'LUNCH'}>Mittagessen</MenuItem>
                                        <MenuItem value={'DINNER'}>Abendessen</MenuItem>
                                        <MenuItem value={'SNACK'}>Snack</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid size={{xs: 12, sm: 9, md: 10}} sx={{mb: 1}}>
                            <FormControl fullWidth>
                                <InputLabel id={'ingredients-label'}>Zutaten</InputLabel>
                                <OutlinedInput
                                    id="ingredients"
                                    label="Zutaten"
                                    value={ingredients}
                                    onChange={handleIngredients}
                                />
                                <MyFormHelperText />
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, sm: 3, md: 2}} sx={{mb: 4}}>
                            <TextField
                                id="duration"
                                label="Dauer"
                                variant="outlined"
                                type={'number'}
                                slotProps={{
                                    input: {
                                        endAdornment: <InputAdornment position="end">Min.</InputAdornment>,
                                    },
                                }}
                                value={duration}
                                onChange={handleDuration}
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12} sx={{mb: 4}}>
                            <TextField
                                id="discription"
                                label="Kurzbeschreibung"
                                variant="outlined"
                                value={description}
                                onChange={handleDescription}
                                multiline
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12} sx={{mb: 4}}>
                            <TextField
                                id="instruction"
                                label="Zubereitung"
                                variant="outlined"
                                value={instruction}
                                onChange={handleInstruction}
                                multiline
                                fullWidth
                            />
                        </Grid>
                        <Button type={'submit'} variant={'outlined'} color={'success'}>Speichern</Button>
                    </Grid>
                </form>
            </Box>
        </Container>
        <Snackbar
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            action={action}
        >
            <SnackbarContent
                style={{
                    backgroundColor: theme.palette.success.main,
                    color: theme.palette.success.contrastText,
                }}
                message="Das Rezept wurde erfolreich abgespeichert."
            />
        </Snackbar>
    </>;
}

export default Entry;