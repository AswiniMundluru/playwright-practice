import { test, Page, expect ,Locator } from '@playwright/test'


//below method is lest preferred of all due to complexity and canno be reused .
test('handling dialogs using waitforevent', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");

const [alertdialog] = await Promise.all([
    page.waitForEvent('dialog' , {predicate :async dialog => {

    console.log(dialog.message());
    console.log(dialog.type());
    await dialog.accept();
    return true;
    }
    }),
     page.getByRole('button', {name:'Simple Alert'}).click()
]);


const [confirmdialog] = await Promise.all([
page.waitForEvent('dialog' , { predicate : async dialog => {

    console.log(dialog.message());
    console.log(dialog.type());
    await dialog.accept();
    return true;
}
    }),
    page.getByRole( 'button' , {name:'Confirmation Alert'}).click()
]);


const [promtdialog] = await Promise.all([

page.waitForEvent('dialog' , {predicate: async dialog => {

    console.log(dialog.message());
    console.log(dialog.type());
    console.log(dialog.defaultValue());
    await dialog.accept('playwright student');
    return true;
}
    }),

 page.getByRole( 'button' , {name:'Prompt Alert'}).click()
]);


});