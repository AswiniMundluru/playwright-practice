import { Page, test , expect ,Locator} from "@playwright/test";

test( "multiplewindows handling using promise" , async ({page,context})=>{
   
    await page.goto("https://the-internet.herokuapp.com/windows");

   const parentpageurl=  page.url();
   console.log(parentpageurl);

   const parentpagetitle = await page.title();
   console.log(parentpagetitle);

   const [childpage1] = await Promise.all([
    context.waitForEvent('page'),
     page.getByText("Click Here").click(), 
   ]);

   const [childpage2] = await Promise.all([
   context.waitForEvent('page'),
   page.getByText("Elemental Selenium").click()
   ]);

const allpages = context.pages();
console.log(allpages.length);

for ( const newpage of allpages)
{

    if (newpage!== page)
    {
console.log(newpage.url());
console.log(await newpage.title());

    }
}

await page.bringToFront();
console.log(page.url());
console.log(await page.title());

});

