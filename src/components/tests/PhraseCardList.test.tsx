import { render } from "@testing-library/react";
import { PhraseProvider, usePhraseContext } from "../../context/PhraseContext";
import PhraseCardList from "../PhraseCardList";
import { describe, it, expect } from "vitest";
import React from "react";

const TestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { addPhrase } = usePhraseContext();

  React.useEffect(() => {
    addPhrase("Frase 1");
    addPhrase("Frase 2");
  }, [addPhrase]);

  return <>{children}</>;
};

describe("PhraseCardList", () => {
  it("debe mostrar las frases agregadas", () => {
    const { getByText } = render(
      <PhraseProvider>
        <TestProvider>
          <PhraseCardList />
        </TestProvider>
      </PhraseProvider>
    );

    expect(getByText("Frase 1")).not.toBeNull();
    expect(getByText("Frase 2")).not.toBeNull();
  });

  it("debe mostrar un mensaje cuando no hay frases", () => {
    const { getByText } = render(
      <PhraseProvider>
        <PhraseCardList />
      </PhraseProvider>
    );

    expect(getByText(/no hay frases disponibles/i)).not.toBeNull();
  });
});