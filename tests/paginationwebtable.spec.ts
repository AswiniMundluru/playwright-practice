import { test, Page, expect ,Locator } from '@playwright/test'

test ("handling pagination web table", async ({page})=>{

await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html?utm_source");

const paginationwebtable = page.locator("#example");
//print all headers
const columns = await paginationwebtable.locator("thead tr").locator("th").allInnerTexts();
console.log(columns);
const rows = await paginationwebtable.locator("tbody tr").all();

//Print all values from first row
const firstrow = await paginationwebtable.locator("tbody tr").nth(0).locator("td").allInnerTexts();
console.log(firstrow);

//Print rowcount

const rowcount = await paginationwebtable.locator("tbody tr").count();
console.log(`row count is ${rowcount}`);

//print all employee names
const employeenames:string [] =[];
console.log("printing all employeenames")
for ( const emp of rows)
{
   const employee = await emp.locator("td").nth(0).innerText();
   employeenames.push(employee);

}

console.log(employeenames);


//print office column and employee names of everyrow in all pages


const officedetails:string [] =[];
const employeedetails:string[]=[];
let employeecount = 0;

while (true)
{
const currentrows = await paginationwebtable.locator("tbody tr").all();
for ( const row of currentrows)
{
    
   const office = await row.locator("td").nth(2).innerText();
   officedetails.push(office);
   const employee = await row.locator("td").nth(0).innerText();
   employeedetails.push(employee);
   const totalemployees = await row.count();
   employeecount = totalemployees + employeecount;
}
const nextbutton =  page.getByLabel("Next");
 if (await nextbutton.isDisabled())
{

break;
}
await nextbutton.click();
}
console.log("printing office column details of every row");
console.log(officedetails);
console.log("printing office employeenames details of every row");
console.log(employeedetails);
console.log( `Total number of employees is ${employeecount}`)
//printing the number of pages

const allpages = await page.locator(".dt-paging button.dt-paging-button:not(.previous):not(.next):not(.first):not(.last)").count();
console.log(`Total number of pages are ${allpages}`);


});

