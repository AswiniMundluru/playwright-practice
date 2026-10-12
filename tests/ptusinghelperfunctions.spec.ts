import { test, expect ,Locator, Page} from '@playwright/test'
import { off } from 'node:cluster';


async function searchandvalidateemployee(page: Page, columnvalue: number, targetvalue: string, expectedposition: string, expectedoffice: string){
    
while (true){

     const currentrows = await page.locator("#example tbody tr").all();

    for ( const row of currentrows)
    {
      
         const celldata =  row.locator("td");
         const cellvalue = await celldata.nth(columnvalue).innerText();

         if (cellvalue.trim() === targetvalue)
         {
    console.log(`employee ${targetvalue} is found`);
    const position = await celldata.nth(1).innerText();
    console.log(`employee position is ${position}`);
    await expect(celldata.nth(1)).toHaveText(expectedposition);
    console.log("Employee poistion is validated")
    const office = await celldata.nth(2).innerText();
    console.log(`employee office is ${office}`);
    await expect(celldata.nth(2)).toHaveText(expectedoffice);
    console.log("employee Office is validated");
    const rowdata = await celldata.allInnerTexts();
    console.log("Printing matching row data")
    console.log(rowdata)
    return true;

         }
    }
       const nextbutton = page.getByLabel("Next")
        if( await nextbutton.isDisabled() )
        {
            break;
    
        }
 await nextbutton.click();
}
console.log(`Finding employee ${targetvalue}`);
console.log(`Cannot find ${targetvalue} in the table`);
return false;
}

test ("search employee using helper function", async({page})=>{


    await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html?utm_source");

   await searchandvalidateemployee(page, 0,"Tiger Nixon", "System Architect", "Edinburgh");
   await searchandvalidateemployee(page, 0, "Tiger", "System Architect", "Edinburgh");


});