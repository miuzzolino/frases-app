import React from "react";
import { usePhraseContext } from "../context/PhraseContext";
import PhraseCard from "./PhraseCard";
import { Stack, Typography } from "@mui/material";

const PhraseCardList: React.FC = () => {
  const { filteredPhrases } = usePhraseContext();

  if (filteredPhrases.length === 0) {
    return <Typography>No hay frases disponibles</Typography>;
  }

  return (
    <Stack spacing={2} width='100%'>
      {filteredPhrases.map((phrase) => (
        <PhraseCard key={phrase} phrase={phrase} />
      ))}
    </Stack>
  );
};

export default PhraseCardList;