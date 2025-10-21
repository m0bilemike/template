import '@testing-library/jest-native/extend-expect';
import mockAsyncStorage from 'jest-mock-async-storage';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);