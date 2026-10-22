import path from "path"
import { test , expect , Page, Locator} from "@playwright/test"

test ("Multiple fileuploads using filechooser event" , async ({page})=>{

await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
const filepath1 = path.resolve("/Users/aswinimundluru/Downloads/composed.jpeg");
const filepath2 = path.resolve("/Users/aswinimundluru/Downloads/composedcopy.jpeg");

const [filechooser] = await Promise.all([


     page.waitForEvent("filechooser"),
     page.locator('input[type="file"]').click()

]);

await filechooser.setFiles([filepath1 , filepath2]);
await expect(page.getByText("composed.jpeg")).toBeVisible();
await expect(page.getByText("composedcopy.jpeg")).toBeVisible();
await page.getByRole("button" , { name: "Start upload"}).click();


});