import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Summary form", () => {
  it("should have checkbox unchecked by default", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /i agree to/i });
    expect(checkbox).not.toBeChecked();
  });
  it("should enable button if checkbox is checked", async () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /i agree to/i });
    const confirmOrderButton = screen.getByRole("button", { name: /confirm/i });

    expect(confirmOrderButton).toBeDisabled();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(confirmOrderButton).toBeEnabled();
  });
  it("unchecking checkbox disables button", async () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", { name: /i agree to/i });
    const confirmOrderButton = screen.getByRole("button", { name: /confirm/i });

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(confirmOrderButton).toBeDisabled();
  });
});
