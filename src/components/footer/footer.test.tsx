import React from "react";

import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("The component <Footer />", () => {
  it("Should render social icons", async () => {
    render(<Footer />);

    expect(screen.getByTitle("Linkedin")).toBeTruthy();
    expect(screen.getByTitle("Github")).toBeTruthy();
    expect(screen.getByTitle("Twitter")).toBeTruthy();
  });
});
