import SearchIcon from "@mui/icons-material/Search";
import * as React from "react";
import {Search} from "@mui/icons-material";

type SearchBarProps ={
    value: string;
    onChange: (value:string) => void;
}


function SearchIconWrapper(props: { children: ReactNode }) {
    return null;
}

function StyledInputBase(props: {
    placeholder: string,
    inputProps: { "aria-label": string },
    value: string,
    onChange: (e) => void
}) {
    return null;
}

export default function SearchBar({value, onChange}: SearchBarProps){
    return(
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


    )
}
