import React from "react";

import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("The component <Footer />", () => {
  it("Should render social icons", async () => {
    render(<Footer />);

    expect(screen.getByText("Linkedin")).toBeTruthy();
    expect(screen.getByText("Github")).toBeTruthy();
    expect(screen.getByText("Twitter")).toBeTruthy();
  });
});
