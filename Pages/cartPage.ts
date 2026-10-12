import { expect , Locator , Page} from "@playwright/test"

export class Cart{

readonly page:Page;
readonly PageTitle: Locator;
readonly CartItems :Locator;
readonly ContinueShopping : Locator;
readonly CheckOut :Locator

constructor(page:Page)
{
    this.page = page;
    this.PageTitle = page.locator('[data-test="title"]');
    this.CartItems = page.locator('[data-test="inventory-item-name"]');
    this.ContinueShopping = page.getByRole("button", {name : "Continue Shopping"});
    this.CheckOut = page.locator('[data-test="checkout"]');
}


async verifycartpageisDisplayed():Promise<void>
{
await expect(this.PageTitle).toHaveText("Your Cart");
}
async verifycartitems() :Promise<number>
{
    return await this.CartItems.count();
}
async VerifyProductIsPresent(productname:string):Promise<void>
{
    const product =  this.CartItems.filter( {hasText: productname});
    await expect(product).toBeVisible();
}
async VeifyProductIsNotPresent(productname:string):Promise<void>
{
    const product =this.CartItems.filter( {hasText: productname});
    await expect(product).toHaveCount(0);
}

async getProductPrice(productname:string):Promise<string>
{
    const product =this.CartItems.filter( {hasText: productname});
    const price = await product.locator('[data-test="inventory-item-price"]').textContent()
    return price?.trim() ?? '';
} 

async verifycontinueshoppinglink():Promise<void>
{
    await this.ContinueShopping.click({timeout:3000});
}

async verifycheckoutbutton():Promise<void>
{
    await this.CheckOut.click({timeout:3000});
}

}







