module.exports = {
    testEnvironment: "jest-environment-jsdom",
    collectCoverage: true,
    coverageReporters: ["lcov", "text"],
    coverageDirectory: "./coverage",
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
  };
  