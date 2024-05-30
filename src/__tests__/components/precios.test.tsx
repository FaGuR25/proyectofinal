import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header Component", () => {
  it("renders correctly with correct styles", () => {
    render(<Header />);
    const headerElement = screen.getByText("Dashboard Header");

    // Verifica que el texto se renderiza correctamente
    expect(headerElement).toBeInTheDocument();

    // Verifica los estilos aplicados
    const parentDiv = headerElement.parentElement;
    expect(parentDiv).toHaveStyle("background: #555");
    expect(parentDiv).toHaveStyle("color: #fff");
    expect(parentDiv).toHaveStyle("padding: 10px 20px");
  });

  it("renders the button and adds text on click", () => {
    render(<Header />);
    const buttonElement = screen.getByText("Agregar Texto");

    // Verifica que el botón se renderiza correctamente
    expect(buttonElement).toBeInTheDocument();

    // Hace clic en el botón
    fireEvent.click(buttonElement);

    // Verifica que el texto se agrega al hacer clic en el botón
    const addedTextElement = screen.getByText("Texto adicional agregado");
    expect(addedTextElement).toBeInTheDocument();
  });
});
