import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>'],
  collectCoverage: true,
  coverageReporters: ['lcov'],
};

export default config;
