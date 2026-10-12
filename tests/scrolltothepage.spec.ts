import { test , expect , Locator} from "@playwright/test"
import { link } from "node:fs";

test ( " sctoll to the page" , async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com");

const countrydropdown = page.locator("#country");
await countrydropdown.scrollIntoViewIfNeeded();
await countrydropdown.click();

await countrydropdown.evaluate((element)=>{

    element.scrollTop = element.scrollHeight;

});

await countrydropdown.selectOption("india");

await expect(countrydropdown).toContainText("India");

const blogger = page.getByText("Blogger");

await blogger.scrollIntoViewIfNeeded();

});