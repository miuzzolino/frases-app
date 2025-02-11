import React from "react";
import { PhraseProvider } from "./context/PhraseContext";
import PhraseForm from "./components/PhraseForm";
import SearchBar from "./components/SearchBar";
import PhraseCardList from "./components/PhraseCardList";
import { Typography, Stack } from "@mui/material";

const App: React.FC = () => {
  return (
    <PhraseProvider>
      <Stack
        alignItems="center"
        maxWidth="sm"
        minWidth="600px"
        alignContent="center"
        gap={2}
      >
        <Typography variant="h3">Gestor de frases</Typography>
        <PhraseForm />
        <SearchBar />
        <PhraseCardList />
      </Stack>
    </PhraseProvider>
  );
};

export default App;
