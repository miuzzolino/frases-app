import { render, fireEvent } from "@testing-library/react";
import PhraseCard from "../PhraseCard";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { usePhraseContext } from "../../context/PhraseContext";

vi.mock("../../context/PhraseContext", () => ({
  usePhraseContext: vi.fn(),
  PhraseProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("PhraseCard", () => {
  it("debe mostrar la frase y llamar a removePhrase al hacer click", () => {
    const testPhrase = "Frase de prueba";
    const mockRemovePhrase = vi.fn();

    vi.mocked(usePhraseContext).mockImplementation(() => ({
      removePhrase: mockRemovePhrase,
      phrases: [testPhrase],
      filteredPhrases: [testPhrase],
      addPhrase: vi.fn(),
      setSearchTerm: vi.fn(),
    }));

    const { getByText, getByTestId } = render(
      <PhraseCard phrase={testPhrase} />
    );

    expect(getByText(testPhrase)).toBeInTheDocument();

    fireEvent.click(getByTestId(`remove-button-${testPhrase}`));
    expect(mockRemovePhrase).toHaveBeenCalledWith(testPhrase);
  });
});
