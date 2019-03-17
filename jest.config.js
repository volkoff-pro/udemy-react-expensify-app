module.exports = {
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/__tests__/setup/enzymeSetup.js',
    '<rootDir>/__tests__/setup/setupTests.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup/',
    '<rootDir>/node_modules/',
    '/fixtures/',
    '/__mocks__/'
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy'
  }
};
