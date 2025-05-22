import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {type FormEvent, useState, useMemo} from "react";
import Select, {type SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl, {useFormControl} from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";


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
    const [category, setCategory] = useState<string>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        alert(new URLSearchParams(formData as never).toString());
    };

    function handleCategory(e: SelectChangeEvent) {
        setCategory(e.target.value as string);
    }

    return (
        <>
            <Container>
                <Box component={'div'} sx={{paddingTop: 12}}>
                    <Typography variant={'h3'}>Ergänze unsere Sammlung mit einem neuen Rezept.</Typography>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <TextField id="name" label="Name" variant="outlined" />
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
                        <TextField id="discription" label="Kurzbeschreibung" variant="outlined" multiline />
                        <FormControl fullWidth>
                            <InputLabel id={'ingredients-label'}>Zutaten</InputLabel>
                            <OutlinedInput id="ingredients" label="Zutaten" />
                            <MyFormHelperText />
                        </FormControl>
                        <TextField id="instruction" label="Zubereitung" variant="outlined" />
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
                        />
                    </form>
                </Box>
            </Container>
        </>
    );
}

export default Entry;