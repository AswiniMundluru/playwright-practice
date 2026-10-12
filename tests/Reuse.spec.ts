import { test, Page, expect } from '@playwright/test'

test.use ({ storageState: 'auth/sauce-session.json' })

test('use saved storage state' , async ({ page })=>{

await page.goto('https://www.saucedemo.com/inventory.html');

  // Verify authentication succeeded
  await expect(page.getByText('Swag Labs',{exact: true})).toHaveText('Swag Labs');

});
