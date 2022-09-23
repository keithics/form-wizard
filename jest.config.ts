import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  testEnvironment: 'node',
  globals: {
    window: {
      location: {}
    }
  }
};

export default config;
