import { Page , expect , Locator} from "@playwright/test";

export class ProductDetails{
    
    readonly page: Page;
    readonly productName: Locator;
    readonly productDescription : Locator;
    readonly productPrice: Locator;
    readonly addToCart :Locator;
    readonly removeButton : Locator;
    readonly cartLink: Locator;
    readonly backToProductsButton: Locator;

    constructor(page:Page)
    {
    this.page =page;
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.productDescription =page.locator('[data-test="inventory-item-desc"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
    this.addToCart = page.locator('[data-test="add-to-cart"]');
    this.removeButton = page.locator('[data-test="remove"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    }

    async verifyproductname(product:string):Promise<void>
    {
        await expect(this.productName).toHaveText(product);
    }
    async verifyproductdescription (expectedproductdescription:string):Promise<void>
    {
        await expect(this.productDescription).toContainText(expectedproductdescription);
    }
    async printproductprice():Promise<void>
    {    
        await this.productPrice.textContent();
    }
    async verifyclickaddtocart() : Promise<void>
    {
        await this.addToCart.click();
    }
    async verifyremovefromcart():Promise<void>
    {
        await this.removeButton.click();
    }
    async verifybacktoproductsbutton() :Promise<void>
    {
        await this.backToProductsButton.click();
    }

    async verifycartlink() : Promise<void>
    {
        await this.cartLink.click();
    }




}

