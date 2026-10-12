import { test as base } from "@playwright/test"
import {InventoryPage} from "../Pages/inventorypage"

type MyFixtures ={

    inventoryPage: InventoryPage
}
export const test = base.extend<MyFixtures>({

    inventoryPage : async ({page}, use) =>
    {
        

        const inventorypage = new InventoryPage(page)

        await use(inventorypage)
    }

});

export { expect} from "@playwright/test"

