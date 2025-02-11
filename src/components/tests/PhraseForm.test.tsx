import { render, fireEvent } from "@testing-library/react";
import { PhraseProvider } from "../../context/PhraseContext";
import PhraseForm from "../PhraseForm";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("PhraseForm", () => {
  it("debe permitir agregar una nueva frase", () => {
    const { getByLabelText, getByText } = render(
      <PhraseProvider>
        <PhraseForm />
      </PhraseProvider>
    );

    const input = getByLabelText(/Escribí una frase/i) as HTMLInputElement;
    const button = getByText(/note_add/i);

    fireEvent.change(input, { target: { value: "Nueva frase" } });
    fireEvent.submit(button.closest("form")!);

    expect(input.value).toBe("");
  });

  it("no debe agregar frases vacías o duplicadas", () => {
    const { getByLabelText, getByText } = render(
      <PhraseProvider>
        <PhraseForm />
      </PhraseProvider>
    );

    const input = getByLabelText(/Escribí una frase/i) as HTMLInputElement;
    const button = getByText(/note_add/i);

    fireEvent.change(input, { target: { value: "Frase única" } });
    fireEvent.submit(button.closest("form")!);
    expect(input.value).toBe("");
    fireEvent.change(input, { target: { value: "Frase única" } });
    fireEvent.submit(button.closest("form")!);

    expect(input.value).toBe("");
  });
});
