import path from 'path';
import{test,expect,Locator} from '@playwright/test';

test ('upload file' , async ({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload" , { waitUntil:"load"});
const filepath = path.resolve("/Users/aswinimundluru/Desktop/tests/data/Fileupload_code.txt");
await page.setInputFiles("#file-upload" , filepath);
await page.locator("#file-submit").click();
await expect(page.getByText("File Uploaded!")).toHaveText("File Uploaded!");
await expect(page.locator("#uploaded-files")).toHaveText("Fileupload_code.txt");


});

