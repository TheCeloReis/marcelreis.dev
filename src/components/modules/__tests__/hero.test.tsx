import React from "react";

import { render, screen } from "@testing-library/react";
import Hero from "../hero";

describe("The component <Hero />", () => {
  it("Should render the texts", async () => {
    const title = "Marcelo";
    const [line1, line2] = ["line1", "line2"];

    render(<Hero title={title} sentences={[line1, line2]} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
