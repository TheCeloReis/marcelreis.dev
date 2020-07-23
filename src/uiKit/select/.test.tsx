import { render, screen } from "@testing-library/react";

import Select from ".";

describe("The <Select /> component", () => {
  const propsMock = { value: "", options: [], onChange: jest.fn() };
  describe("When provided options", () => {
    it("Should render them all", () => {
      const options = [
        { value: "us", text: "United States" },
        { value: "br", text: "Brazil" },
        { value: "es", text: "Spain" },
      ];
      render(
        <Select {...propsMock} options={options} value={options[0].value} />
      );

      expect(screen.getAllByRole("option")).toHaveLength(3);
    });
  });
});
