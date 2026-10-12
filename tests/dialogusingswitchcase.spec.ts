import { test, Page, expect ,Locator } from '@playwright/test'

//Below test is most preferred of all

test('handling dialogs', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");
page.on('dialog', async dialog =>{

    console.log(dialog.message());
    console.log(dialog.type());
   
switch (dialog.type())
{

case 'alert':
    await dialog.dismiss();
    break;

case 'confirm':
    await dialog.accept();
    break;

case 'prompt':
    await dialog.accept('Playwright Student');
    console.log(dialog.defaultValue());
    break;

case 'beforeunload':

    await dialog.accept();
    break;

case 'default':

await dialog.dismiss();
break;

}

});

await page.getByRole('button', {name:'Simple Alert'}).click();
await page.getByRole( 'button' , {name:'Confirmation Alert'}).click();
await page.getByRole( 'button' , {name:'Prompt Alert'}).click();

await expect(page.locator("#demo")).toHaveText("Hello Playwright Student! How are you today?");

});


