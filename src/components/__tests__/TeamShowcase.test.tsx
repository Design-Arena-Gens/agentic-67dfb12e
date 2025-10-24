import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TeamShowcase } from "@/components/TeamShowcase";

const teams = [
  {
    name: "Northbank City",
    manager: "Marco Silva",
    formation: "3-2-4-1",
    form: ["W", "W", "D", "W", "W"],
    strengths: ["High press", "Vertical passing"],
    badge: "",
  },
  {
    name: "Lisbon United",
    manager: "João Nogueira",
    formation: "4-2-3-1",
    form: ["W", "D", "W", "W", "W"],
    strengths: ["Positional play"],
    badge: "",
  },
];

describe("TeamShowcase", () => {
  it("renders all teams by default", () => {
    render(<TeamShowcase teams={teams} />);

    expect(screen.getByText("Northbank City")).toBeVisible();
    expect(screen.getByText("Lisbon United")).toBeVisible();
  });

  it("filters teams by formation", async () => {
    const user = userEvent.setup();
    render(<TeamShowcase teams={teams} />);

    await user.click(screen.getByRole("button", { name: "4-2-3-1" }));

    expect(screen.getByText("Lisbon United")).toBeVisible();
    expect(screen.queryByText("Northbank City")).not.toBeInTheDocument();
  });
});
