import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Login } from "pages/login";
import { useLogin } from "pages/login/hook";
jest.mock("pages/login/hook", () => ({
  useLogin: jest.fn(),
}));

describe("Login", () => {
  test("renders login form and performs login", async () => {
    const mockOnSubmit = jest.fn();
    const mockUseLogin = jest.fn(() => ({
      isLoading: false,
      onSubmit: mockOnSubmit,
    }));
    mockUseLogin.mockImplementation(() => ({
      isLoading: false,
      onSubmit: mockOnSubmit,
    }));
    (useLogin as any).mockImplementation(mockUseLogin);

    render(<Login />);

    fireEvent.change(screen.getByLabelText("E-mail"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Senha"), {
      target: { value: "password123" },
    });

    expect(screen.getByLabelText("E-mail")).toHaveValue("test@example.com");
    expect(screen.getByLabelText("Senha")).toHaveValue("password123");

    fireEvent.click(screen.getByText("Entrar"));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
