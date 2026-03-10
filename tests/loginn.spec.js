import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Test', async ({ page }) => {

const login = new LoginPage(page)

await login.gotoLoginPage()

await login.login('standard_user','secret_sauce')

})