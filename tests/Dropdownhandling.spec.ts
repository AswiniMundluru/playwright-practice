import { test, Page, expect ,Locator } from '@playwright/test'

test ('Dropdown handling test' , async ({page}) =>
{
await page.goto('https://testautomationpractice.blogspot.com/');

const countrydropdown = page.locator('#country');
await countrydropdown.selectOption('Germany');
await page.waitForTimeout(2000);
await countrydropdown.selectOption({value: 'uk'});
await page.waitForTimeout(2000);
await expect(countrydropdown).toContainText('United Kingdom');
console.log(await countrydropdown.textContent());

const allOptionElements = await page.locator('#country > option').all();
console.log(allOptionElements);

for ( let option of allOptionElements)
{
    const optionText = await option.textContent();
  
   
}

//Another easy way to select dropdown and validate the dropdown:

const allOptionsText = await page.locator('#country > option').allTextContents();

console.log(allOptionsText);

await expect(allOptionsText.map(t=>t.trim())).toContain("France");


});


//Reusable function

test ('dropdownhandling using reusable functions' , async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');

const dropdown: Locator =  page.locator('#country');

selectdropdown( dropdown , 'Australia');


});

async function selectdropdown( Element: Locator , text : string): Promise<void>
{

    await Element.selectOption(text);
    await expect(Element).toContainText(text);


}

