import { test, expect } from '@playwright/test';
const BASEURL ='https://www.saucedemo.com/';
const STORAGE_STATE_PATH = 'auth/sauce-session.json';

test( "create authenticated saucedmo session with stoage path" , async ({page})=>{

await page.goto(BASEURL);
await expect(page).toHaveURL(BASEURL);
await expect(page).toHaveTitle(/Swag Labs/i);

const usernameInput = page.locator('#user-name');
const passwordInput = page.locator('#password');
const loginButton = page.locator('#login-button');

await expect(usernameInput).toBeVisible();
await expect(passwordInput).toBeVisible();
await expect(loginButton).toBeVisible();
await expect(loginButton).toBeEnabled();

await usernameInput.fill('standard_user');
await passwordInput.fill('secret_sauce');

await expect(usernameInput).toHaveValue('standard_user');
await expect(passwordInput).toHaveValue('secret_sauce');

await loginButton.click();
await page.waitForURL('https://www.saucedemo.com/inventory.html' , {waitUntil: "load"});

await expect(page.locator('.title')).toHaveText("Products");
await expect(page.locator('.inventory_list')).toBeVisible();
await page.context().storageState({ path: STORAGE_STATE_PATH });



})