import { test, Page, expect ,Locator } from '@playwright/test'

test ('static webtable handling' , async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com");

const webtable = page.locator("//table[@name='BookTable']");

const rows =  webtable.locator("tbody tr").filter({ has: page.locator("td")});
const rowcount = await rows.count();
console.log(`Number of rows are: ${rowcount}`);
const allrows = await rows.all();

const columns = webtable.locator("th");
const columncount= await columns.count();
console.log(`number of columns :${columncount}`);

//Search for the book "Master In Selenium" and print its Author, Subject, and Price.

const book =   webtable.locator("tbody tr").filter({has:page.getByText('Master In Selenium', { exact: true})});
const bookrow = await book.locator("td").all();
console.log(bookrow);

const allbookdetail : string[] = [];

for ( const bookcell of bookrow){

    const bookdetail = await bookcell.innerText();
    allbookdetail.push(bookdetail);

}
console.log(allbookdetail);


// print all books written by mukesh

const mukeshbook = await webtable.locator("tbody tr").filter({has:page.getByText('Mukesh', { exact: true})}).all();
console.log(mukeshbook);
console.log("printing mukesh booknames");
for ( const mukeshbookdetail of mukeshbook){

   const bd = await mukeshbookdetail.locator("td").nth(2).innerText();
   console.log(bd);
}

//Print all headers
const headers = await webtable.locator("th").allInnerTexts();
console.log("Printing all headers");
console.log(headers);


//Print all book names
const allbooknames :string[] = [];

for ( const row of allrows)
{
const bookname:string = await row.locator("td").nth(0).innerText();
 allbooknames.push(bookname);

}
console.log("Printing all booknames");
console.log(allbooknames);

//print all authornames

const allauthornames: string[]=[];

for ( const row of allrows)
{

    const authornames = await row.locator("td").nth(1).innerText();
    allauthornames.push(authornames);

}
console.log("printing all authornames");
console.log(allauthornames);

//print all subject names

const allsubjectnames : string[]=[];

for ( const row of allrows)
    {

const subjectname = await row.locator("td").nth(2).innerText();
allsubjectnames.push(subjectname);

}

console.log("printing all subjectnames");
console.log(allsubjectnames);


//print all prices
const allprices :number [] = [];

for( const row of allrows)
{

    const price = await row.locator("td").nth(3).innerText();
    const finalprice = Number(price);

    allprices.push(finalprice);


}

console.log("printing all prices");
console.log(allprices);


//calculate the total price of all books
let sum:number = 0;
for ( let i=0 ; i< allprices.length ; i++ )
    {

 sum = sum + allprices[i];

}
console.log(`price of all books is ${sum}`)

//find the most expensive book in the table

let expensivebookprice :number  = Math.max(...allprices);
let expbook = expensivebookprice.toString();
 console.log(`expensive book price is ${expbook}` );

 expensivebookname(expbook);
 async function expensivebookname(expbook:string)
 {
  
   let bn =  await webtable.locator("tbody tr").filter ( { has:page.getByText(expbook)}).locator("td").nth(0).innerText();

   console.log( `expensibe book name is ${bn}`);

 }

 //verify that book "Learn java" is present in the table

 await expect(webtable.locator("tbody")).toContainText("Learn Java");
 await expect (webtable.locator("tbody tr", {hasText:"Learn Java"})).toBeVisible();
 await expect( webtable.locator("tbody tr").locator("td").filter({ has : page.getByText("Learn Java")})).toHaveText("Learn Java");

});



