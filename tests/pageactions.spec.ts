import { test, Page, expect } from '@playwright/test'
    
const Base_URL = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html';

test('Automation Practice' , async ({ page })=>{
await page.goto(Base_URL);
await page.goBack();
await page.goForward();
console.log(page.url());

for (let i=0 ; i<3 ; i++)
    {
        await page.reload();
    }

const title =  await page.title();
console.log(title);

await expect(page).toHaveURL(/playwrightpractice/i);
await expect(page).toHaveTitle(/Playwright/i);

await page.getByRole( 'button' , { name: 'Primary Action'}).click();
await page.getByRole( 'checkbox' ,{ name: ' Accept terms'}).check();
await page.getByLabel('Email Address:', {exact:true}).fill("abc@gmail.com");
await page.getByLabel(' Password: ').fill("abc@123")
await page.getByLabel('Your Age:').fill("23");
await page.getByLabel(' Standard').click();



});

