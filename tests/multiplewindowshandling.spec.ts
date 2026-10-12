import{ test, Page ,expect ,chromium , Locator} from "@playwright/test"
import { ChildProcess } from "node:child_process";
import { allowedNodeEnvironmentFlags } from "node:process";

test ( "multiple wondows handling", async ()=>{

const browser = await chromium.launch();
const browsercontext= await browser.newContext();
const page = await browsercontext.newPage();

await page.goto("https://the-internet.herokuapp.com/windows");
const parentpageURL= page.url();
console.log(parentpageURL);
const parentpagetitle = await page.title();
console.log(parentpagetitle);

 await page.getByText("Click Here").click();
  await page.getByText("Elemental Selenium").click();

await page.waitForTimeout(3000);
const allpages = browsercontext.pages();
console.log(allpages.length);

for (const childpage of allpages)
{

    if ( childpage!== page)
    {
        const childpageURL = childpage.url();
        console.log(childpageURL);
         const childpagetitle =await childpage.title();
         console.log(childpagetitle);
         await childpage.close();


    }
}

await page.bringToFront();
console.log(page.url());
await browser.close();
});