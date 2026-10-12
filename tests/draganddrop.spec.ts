import { test , expect} from "@playwright/test"

test("drag and drop" , async({page})=>{

await page.goto("https://jqueryui.com/droppable/");

const frame =  page.frameLocator("iframe");
const source = await frame.locator("#draggable");
const target = await frame.locator("#droppable");

await source.dragTo(target);


});

