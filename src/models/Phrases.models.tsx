export interface PhraseCardProps {
  phrase: string;
}

export interface PhraseContextType {
  phrases: string[];
  filteredPhrases: string[];
  addPhrase: (phrase: string) => void;
  removePhrase: (phrase: string) => void;
  setSearchTerm: (term: string) => void;
}