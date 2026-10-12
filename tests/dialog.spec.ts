import { test, Page, expect ,Locator } from '@playwright/test'

//Below test is most preferred of all

test('handling dialogs', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");
page.on('dialog', async dialog =>{

    console.log(dialog.message());
    console.log(dialog.type());
   
if (dialog.type() === 'alert')
{

    await dialog.dismiss();

}

if ( dialog.type() === 'confirm'){

     await dialog.accept();
}

if ( dialog.type() ==='prompt'){

    await dialog.accept('Playwright Student');
    console.log(dialog.defaultValue());
}

});

await page.getByRole('button', {name:'Simple Alert'}).click();
await page.getByRole( 'button' , {name:'Confirmation Alert'}).click();
await expect(page.locator("#demo")).toHaveText("You pressed OK!");
await page.getByRole( 'button' , {name:'Prompt Alert'}).click();
await expect(page.locator("#demo")).toHaveText("Hello Playwright Student! How are you today?");

});



