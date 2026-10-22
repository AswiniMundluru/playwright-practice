import path from "path"
import { test , expect , Locator , Page} from "@playwright/test"

test( "upload multiple files", async({page})=>{

await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
const filepath1 = path.resolve("/Users/aswinimundluru/Downloads/composed.jpeg");
const filepath2 = path.resolve("/Users/aswinimundluru/Downloads/composedcopy.jpeg");
await page.locator('input[type="file"]').setInputFiles([filepath1,filepath2]);

await expect(page.getByText("composed.jpeg")).toHaveText("composed.jpeg");
await expect(page.getByText("composedcopy.jpeg")).toHaveText("composedcopy.jpeg");

await page.getByRole("button" , { name: "Start upload"}).click();

});