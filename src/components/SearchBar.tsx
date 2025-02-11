import React from "react";
import { Icon, InputAdornment, TextField } from "@mui/material";
import { usePhraseContext } from "../context/PhraseContext";

const SearchBar: React.FC = () => {
  const { setSearchTerm } = usePhraseContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <TextField
      label="Buscar frases"
      variant="outlined"
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <span className="material-symbols-outlined">search</span>
            </InputAdornment>
          ),
        },
      }}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
