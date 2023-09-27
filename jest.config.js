module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
}
