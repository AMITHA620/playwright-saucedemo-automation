import { test, expect } from '@playwright/test';

test('Valid Login Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory/);

});
//Invalid Login Test
test('Invalid Login Test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'wrong');
  await page.fill('#password', 'wrong');

  await page.click('#login-button');

  const error = page.locator('[data-test="error"]');

  await expect(error).toBeVisible();

});

