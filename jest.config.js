const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config = {
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
    '!pages/_app.tsx',
    '!pages/**/index.tsx',
    '!pages/index.tsx',
    '!components/**/index.tsx',
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

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)
