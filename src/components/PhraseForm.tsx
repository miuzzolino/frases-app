import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { usePhraseContext } from "../context/PhraseContext";

const PhraseForm: React.FC = () => {
  const { addPhrase, phrases } = usePhraseContext();
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!inputValue.trim()) {
      setError("No se puede agregar una frase vacía");
      setInputValue("");
      return;
    }

    if (phrases.includes(inputValue.trim())) {
      setError("No se puede agregar una frase repetida");
      setInputValue("");
      return;
    }

    addPhrase(inputValue.trim());
    setInputValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <TextField
        label="Escribí una frase"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        error={!!error}
        helperText={error}
        fullWidth
        aria-describedby="error-message"
      />
      <Button
        type="submit"
        variant="outlined"
        color="secondary"
        sx={{
          minWidth: "56px",
          minHeight: "56px",
          maxWidth: "56px",
          maxHeight: "56px",
        }}
      >
        <span className="material-symbols-outlined">note_add</span>
      </Button>
    </form>
  );
};

export default PhraseForm;
