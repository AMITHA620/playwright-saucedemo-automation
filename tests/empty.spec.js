import { test, expect } from '@playwright/test';

test('Checkout should fail with empty cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Open cart without adding product
  await page.click('.shopping_cart_link');

  // Checkout
  await page.click('#checkout');

  // Fill user details
  await page.fill('#first-name', 'Amitha');
  await page.fill('#last-name', 'Sharan');
  await page.fill('#postal-code', '682001');

  await page.click('#continue');

  await page.click('#finish');

  // Verify success message SHOULD NOT appear
  const message = page.locator('.complete-header');

  await expect(message).not.toHaveText('Thank you for your order!');

});