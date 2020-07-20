import { getContent } from ".";

describe("The getContent function", () => {
  it("Should receive a path and query and return the content", () => {
    expect(getContent("/about", "pt-br")).toBeTruthy();
  });
});
