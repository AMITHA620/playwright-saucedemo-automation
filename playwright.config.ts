import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in parallel */
  fullyParallel: true,

  /* Number of retries for failed tests */
  retries: 2,

  /* Run multiple workers (parallel execution) */
  workers: 3,

  /* Reporters */
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    /* Screenshot on test failure */
    screenshot: 'only-on-failure',

    /* Record video when test fails */
    video: 'retain-on-failure',

    /* Trace for debugging failed tests */
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});