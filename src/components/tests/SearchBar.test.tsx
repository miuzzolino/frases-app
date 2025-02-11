import { render, fireEvent } from "@testing-library/react";
import { PhraseProvider } from "../../context/PhraseContext";
import SearchBar from "../SearchBar";
import { describe, it, expect } from "vitest";

describe("SearchBar", () => {
  it("debe actualizar el término de búsqueda", () => {
    const { getByLabelText } = render(
      <PhraseProvider>
        <SearchBar />
      </PhraseProvider>
    );

    const input = getByLabelText(/Buscar frases/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });
});
