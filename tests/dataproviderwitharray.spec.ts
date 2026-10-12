import { Page, test , expect , Locator} from "@playwright/test";

type logindata = {

    username: string;
    password:string;
    expectedurl? :string;
    expectederror?: string;
}

const Logindata : logindata [] = 

[
    {
        username : "standard_user",
        password: "secret_sauce",
        expectedurl  : "https://www.saucedemo.com/inventory.html",
    },
{
    username : "locked_out_user",
        password: "secret_sauce",
        expectederror : "Epic sadface: Sorry, this user has been locked out",
}
]

for (const data of Logindata){

test(`logintest for ${ data.username}`, async({page})=>{

await page.goto("https://www.saucedemo.com");
await page.getByPlaceholder("Username").fill(data.username);
await page.getByPlaceholder("Password").fill(data.password);
await page.locator("#login-button").click();

if(data.expectedurl)

    {
    await expect(page).toHaveURL(data.expectedurl);
    }

    if (data.expectederror)
    {
        const errormessage =  page.locator('[data-test="error"]');
        await expect(errormessage).toContainText(data.expectederror);
    }

});


};