import { test, expect } from '@playwright/test';

// TC08 - Checkout with Empty Cart
test('TC08 Checkout with Empty Cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('.shopping_cart_link');

  const items = page.locator('.cart_item');
  await expect(items).toHaveCount(0);
});


// TC10 - Cart Badge Validation
test('TC10 Cart Badge Validation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');

  const badge = page.locator('.shopping_cart_badge');
  await expect(badge).toHaveText('1');
});


// TC11 - Access Product Page Without Login
test('TC11 Access Product Page Without Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/inventory.html');

  await expect(page).toHaveURL('https://www.saucedemo.com/');
});


// TC13 - Missing First Name
test('TC13 Missing First Name', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  await page.fill('#last-name', 'mk');
  await page.fill('#postal-code', '12345');

  await page.click('#continue');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


// TC14 - Missing Last Name
test('TC14 Missing Last Name', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  await page.fill('#first-name', 'amitha');
  await page.fill('#postal-code', '12345');

  await page.click('#continue');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


// TC15 - Missing Postal Code
test('TC15 Missing Postal Code', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  await page.fill('#first-name', 'amitha');
  await page.fill('#last-name', 'mk');

  await page.click('#continue');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});


// TC16 - Submit Empty Checkout Form
test('TC16 Submit Empty Checkout Form', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('#add-to-cart-sauce-labs-backpack');
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  await page.click('#continue');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});