import { extractPostURL, findPostByURL } from "../post";

describe("The extractPostsURL", () => {
  it("Should remove the md ending", () => {
    expect(extractPostURL("test.md")).toBe("test");
  });

  it("Should remove the data from the file", () => {
    expect(extractPostURL("2020-03-08-test-interesting.md")).toBe(
      "test-interesting"
    );
  });

  it("Should permit numbers in the midle of the string", () => {
    expect(extractPostURL("2020-03-08-test-this-03-number.md")).toBe(
      "test-this-03-number"
    );
  });
});

describe("The findPostByURL", () => {
  const fakeFiles = [
    "2012-03-07-test-easy.md",
    "2012-02-07-test-medium.md",
    "2012-04-17-test-hard.md",
  ];

  it("Should return a match for a valid post", () => {
    expect(findPostByURL("test-easy", fakeFiles)).toBe(fakeFiles[0]);
    expect(findPostByURL("test-medium", fakeFiles)).toBe(fakeFiles[1]);
    expect(findPostByURL("test-hard", fakeFiles)).toBe(fakeFiles[2]);
  });

  it("Should return a empty string for a invalid post", () => {
    expect(findPostByURL("test-insane", fakeFiles)).toBeUndefined();
  });
});
