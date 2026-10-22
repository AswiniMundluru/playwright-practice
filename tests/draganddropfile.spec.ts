import { test , expect} from "@playwright/test"

test("manual drag and drop" , async({page})=>{

await page.goto("https://jqueryui.com/droppable/");
const frame =  page.frameLocator(".demo-frame");
const source =  frame.locator("#draggable");
const target =  frame.locator("#droppable");

const sourcebox = await source.boundingBox();
const targetbox = await target.boundingBox();

if (!sourcebox) throw new Error("Could not find the draggable element's bounding box");
if (!targetbox) throw new Error("Could not find the droppable element's bounding box");

const sourceX = sourcebox.x + sourcebox.width /2;
const sourceY = sourcebox.y + sourcebox.height /2;

const targetX = targetbox.x + targetbox.width /2;
const targetY=  targetbox.y + targetbox.height /2;

    await page.mouse.move(sourceX, sourceY);       
  await page.mouse.down();                     
  await page.mouse.move(targetX, targetY, { steps: 10 }); 
  await page.mouse.up();
  

});