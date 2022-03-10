module.exports = {
  roots: ['.'],
  setupFilesAfterEnv: ['./tools/testing/jest-setup'],
  moduleDirectories: [
    'pages/',
    'components/',
    'node_modules',
    './tools/testing/',
    __dirname, // the root directory
  ],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'pages/**/*.tsx',
    'pages/**/*.jsx',
    'pages/*.tsx',
    'components/**/*.tsx',
    'components/**/*.jsx',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|xlsx)$':
      '<rootDir>/tools/mocks/file-mock.js',
    '\\.svg$': '<rootDir>/tools/mocks/svg-mock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
}
