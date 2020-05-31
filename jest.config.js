module.exports = {
  collectCoverageFrom: [
    "src/cms/**/*.{ts,tsx}",
    "src/components/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components$1",
    "\\.(scss)$": "identity-obj-proxy",
  },
};
