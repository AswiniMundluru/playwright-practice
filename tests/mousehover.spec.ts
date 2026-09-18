import { Page,expect, test , Locator, chromium} from "@playwright/test"

test ( "mouse hover test" , async()=>{

    const broswer = await chromium.launch();
    const browsercontext = await broswer.newContext();
    const parentpage = await browsercontext.newPage();

await parentpage.goto("https://www.spicejet.com/");
await parentpage.getByText("Add-ons",{ exact: true}).first().hover();
await parentpage.getByText("SpiceAssurance").click();

try {//same page

    await parentpage.waitForURL("/SpiceAssurance/");
    await expect(parentpage).toHaveURL("/SpiceAssurance/");
}

catch{
//new page

const allpages =  browsercontext.pages();

for( const newpage of allpages){

    const otherpage =  newpage.url();


    if( newpage!==parentpage &&  otherpage.includes("SpiceAssurance"))
        {

        console.log("newpage opened");

    }
}


}

});