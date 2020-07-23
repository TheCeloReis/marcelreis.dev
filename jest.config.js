module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/uiKit/**/*.{ts,tsx}",
    "src/cms/**/*.{ts,tsx}",
    "src/utils/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components$1",
    "^uiKit(.*)$": "<rootDir>/src/uiKit$1",
    "\\.(scss)$": "identity-obj-proxy",
  },
};
