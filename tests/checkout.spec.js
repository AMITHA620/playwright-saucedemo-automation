import { test, expect } from '@playwright/test';

test('Checkout process', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  await page.click('.shopping_cart_link');

  await page.click('#checkout');

  await page.fill('#first-name', 'Amitha');
  await page.fill('#last-name', 'Sharan');
  await page.fill('#postal-code', '682001');

  await page.click('#continue');

  await page.click('#finish');

  const message = page.locator('.complete-header');

  await expect(message).toHaveText('Thank you for your order!');

});
