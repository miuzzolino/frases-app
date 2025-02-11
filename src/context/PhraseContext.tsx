import React, { createContext, useState, ReactNode, useContext } from "react";
import { PhraseContextType } from "../models/Phrases.models";

const PhraseContext = createContext<PhraseContextType | undefined>(undefined);

export const PhraseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [phrases, setPhrases] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const addPhrase = (newPhrase: string) => {
    if (!newPhrase.trim() || phrases.includes(newPhrase)) return;
    setPhrases((prev) => [...prev, newPhrase]);
  };

  const removePhrase = (phraseToRemove: string) => {
    setPhrases((prev) => prev.filter((phrase) => phrase !== phraseToRemove));
  };

  const getFilteredPhrases = () => {
    if (!searchTerm) return phrases;
    return phrases.filter((phrase) =>
      phrase.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <PhraseContext.Provider
      value={{
        phrases,
        filteredPhrases: getFilteredPhrases(),
        addPhrase,
        removePhrase,
        setSearchTerm,
      }}
    >
      {children}
    </PhraseContext.Provider>
  );
};

export const usePhraseContext = (): PhraseContextType => {
  const context = useContext(PhraseContext);
  if (!context) {
    throw new Error("usePhraseContext must be used within a PhraseProvider");
  }
  return context;
};
