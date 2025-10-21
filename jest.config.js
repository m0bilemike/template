module.exports = {
    preset: 'jest-expo',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transform: {
      '^.+\\.[jt]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-clone-referenced-element|react-navigation|@react-navigation/.*)',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      'components/**/*.{ts,tsx}',
      'screens/**/*.{ts,tsx}',
    ],
  };