import { test , Page , expect, Locator } from "@playwright/test"

test ("handle new window" , async({page, context})=>{
    
    await page.goto("https://the-internet.herokuapp.com/windows"); 
    const [newtab] = await Promise.all([
         context.waitForEvent("page"),
         page.getByText("Click Here").click()
    ])
    const allpages = context.pages();
    console.log(allpages);

    for (const Newpage of allpages)
    {

    if( Newpage !== page)
    {
    console.log(Newpage.url());
    console.log(await Newpage.title());
   await expect(Newpage.getByText("New Window")).toHaveText("New Window");
    }
    }

    await page.bringToFront();
    console.log(await page.title());

});