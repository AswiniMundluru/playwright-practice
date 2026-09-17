import { Page , expect , Locator } from "@playwright/test";

export class InventoryPage {

    readonly page: Page;
    readonly pageTitle : Locator;
    readonly inventoryItems : Locator;
    readonly cartlink : Locator;
    readonly cartbadge : Locator
    readonly sortdropdown : Locator;
    readonly menubutton : Locator;
    readonly logoutlink : Locator;
    constructor (page:Page)
    {
        this.page = page;
        this.pageTitle =  page.getByText("Swag Labs");
        this.inventoryItems = page.locator('[data-test = "inventory-item"]');
        this.cartlink = page.locator('[data-test = "shopping-cart-link"]');
        this.cartbadge = page.locator('[data-test = "shopping-cart-badge"]');
        this.sortdropdown = page.locator('[data-test = "product-sort-container"]');
        this.menubutton = page.getByRole ("button" , { name: 'Open Menu'});
        this.logoutlink = page.locator('[data-test = "logout-sidebar-link"]');

    }


    async verifypagetitle() : Promise<void>{

        await expect(this.pageTitle).toContainText("Swag Labs");
        await expect(this.page).toHaveURL("/https://www.saucedemo.com/inventory.html/");
    }
async getinventoryitemscount() : Promise<number> {

    return await this.inventoryItems.count();
}

async 




}