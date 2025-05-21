import SearchIcon from "@mui/icons-material/Search";
import {alpha, styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

type SearchBarProps ={
    value: string;
    onChange: (value:string) => void;
}
export default function SearchBar({value, onChange}: SearchBarProps){
    // Design suchfeld
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha('#D7B76F', 0.15),
        border: '1px solid #D7B76F',
        '&:hover': {
            backgroundColor: alpha('#D7B76F', 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));
    // Lupe
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#D7B76F',
    }));

    // text in den suchfeld
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: '#FBFAF7',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));
    //Search Bar
    const [RecipeList, setRecipeList] = useState(recipesDatebase);
    const [searchText, setSearchText] = useState("");

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const filteredRecipes = recipesDatebase.filter(char => {
        const keyword = searchText.trim().toLowerCase();
        return (
            char.name.toLowerCase().includes(keyword) ||
            char.ingredients.toLowerCase().includes(keyword) ||
            char.category.toLowerCase().includes(keyword)
        );
    })

    return(
        <>
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Finde dein Rezept mit Name, Zutat..."
                inputProps={{ 'aria-label': 'search' }}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </Search>

        </>

    )
}
