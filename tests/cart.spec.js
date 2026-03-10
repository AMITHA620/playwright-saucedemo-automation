import { test, expect } from '@playwright/test';

test('Add products to cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('#add-to-cart-sauce-labs-bike-light');

  const cart = page.locator('.shopping_cart_badge');

  await expect(cart).toHaveText('2');

  await page.click('.shopping_cart_link');

});
