import { test , expect , Locator} from "@playwright/test";

test ( "soft assert test", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");

const maleradiobutton =  page.getByRole("radio" , { name :"Male" , exact : true});
await maleradiobutton.check();

const femaleradiobutton =  page.getByRole( "radio" , { name : "Female" , exact : true});
await femaleradiobutton.check();

await expect.soft(maleradiobutton).toBeChecked();

await expect.soft(femaleradiobutton).toBeChecked()

const days = page.getByRole("checkbox" , { name: "Sunday"});

await days.check();

});