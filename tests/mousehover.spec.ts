import { Page,expect, test , Locator} from "@playwright/test"

test ( "mouse hover test" , async({page})=>{

await page.goto("https://www.spicejet.com/");
await page.getByText("Add-ons").hover();
await page.getByText("SpiceAssurance").click();




});