import { test , expect, chromium } from "@playwright/test"

test.describe("multiple pages opening", () =>{

test( "open three urls" , async({context})=>{

    const urls = [

        'https://google.com',
        'https://playwright.dev',
        'https://github.com'
    ] ;

for ( const url of urls) {

    const newpage = await context.newPage();
    await newpage.goto(url);
    const title = await newpage.title();
    console.log( `title of the page is ${title}`);
    await newpage.close();
}

})


test( " open two pages in same broswer", async({})=>{

const urls = [

'https://google.com',
'https://playwright.dev',
'https://github.com',
'https://www.wikipedia.org'

]
const newbrowser = await chromium.launch();
const broswercontext = await newbrowser.newContext();

for (const url of urls){

    const newpage = await broswercontext.newPage();
    await newpage.goto(url);
    const title = await newpage.title();
    console.log( ` new page title is ${title}`);


}

await newbrowser.close()

});

});