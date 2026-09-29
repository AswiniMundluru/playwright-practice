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
    async verifyInventoryPageIsDisplayed() : Promise<void>{
        await expect(this.pageTitle).toContainText("Swag Labs");
        await expect(this.page).toHaveURL("/https://www.saucedemo.com/inventory.html/");
    }
    async getinventoryitemscount() : Promise<number> 
    {
    return await this.inventoryItems.count();
    }
    async addproducttocart(productname: string): Promise<void>
    {
        const product =  this.inventoryItems.filter({hasText: productname});
        await product.getByRole("button", { name : "Add to cart"}).click();
    }
    async selectproduct(productname: string): Promise<void>
    {
    const product =  this.inventoryItems.filter({hasText: productname});
    await product.getByText(productname).click();
    }
    async removeproductfrominventory(productname:string) : Promise<void>
    {
        const removeproduct = this.inventoryItems.filter({hasText:productname});
        await removeproduct.getByRole("button", { name : "Remove"}).click();
    }
    async getproductprice(productname:string): Promise<string> 
    {
        const product =  this.inventoryItems.filter({hasText: productname});
        const price = await product.locator('[data-test="inventory-item-price"]').innerText();
        console.log(price);
        return price.trim();

    }
    async sortoptionselection(sortOption:string) : Promise<void>
    {
        await this.sortdropdown.selectOption(sortOption);
    }
    async opencart() :Promise<void>
    {
        await this.cartlink.click();
    }
    async verifycartcount(expectedcount:number):Promise<void>
    {
        await expect(this.cartbadge).toHaveCount(expectedcount);
    }
    async logout() :Promise<void>
    {   
        await this.menubutton.click();
        await this.logoutlink.click();
    }

    }