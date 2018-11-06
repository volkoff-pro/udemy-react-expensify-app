module.exports = {
  setupFiles: ['raf/polyfill', '<rootDir>/__tests__/setup/enzymeSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup/',
    '<rootDir>/node_modules/',
    '/fixtures/'
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy'
  }
};
