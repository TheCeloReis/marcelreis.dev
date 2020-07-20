module.exports = {
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/cms/**/*.{ts,tsx}",
    "src/utils/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/src/components$1",
    "\\.(scss)$": "identity-obj-proxy",
  },
};
