import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { usePhraseContext } from "../context/PhraseContext";
import { PhraseCardProps } from "../models/Phrases.models";

const PhraseCard: React.FC<PhraseCardProps> = ({ phrase }) => {
  const { removePhrase } = usePhraseContext();

  return (
    <Card variant="outlined" style={{ margin: "10px", width: "96%" }}>
      <CardContent sx={{display: 'flex', justifyContent: "space-between"}}>
        <Typography variant="body1" maxWidth='75%' textOverflow='ellipsis' overflow="hidden">{phrase}</Typography>
        <Button
          data-testid={`remove-button-${phrase}`}
          onClick={() => removePhrase(phrase)}
          sx={{alignItems: 'flex-end'}}
          color="secondary"
        >
          <span className="material-symbols-outlined">delete</span>
          Eliminar
        </Button>
      </CardContent>
    </Card>
  );
};

export default PhraseCard;
