module.exports = {
  setupFiles: ['<rootDir>/__tests__/setup/enzymeSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup/',
    '<rootDir>/node_modules/'
  ],
  moduleNameMapper: {
    '^.+\\.(css|scss|sass)$': 'identity-obj-proxy'
  }
};
