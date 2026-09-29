import { Page, expect , Locator} from "@playwright/test"

export class CheckOutOverviewPage {

    readonly page: Page;
    readonly pageTitle: Locator;
    readonly products :Locator;
    readonly paymentInformation : Locator;
    readonly shippingInformation : Locator;
    readonly ItemTotal : Locator;
    readonly tax :Locator;
    readonly Total : Locator;
    readonly cancelButton: Locator;
    readonly Finish :Locator;

    constructor(page:Page)
    {
    this.page= page;
    this.pageTitle = page.locator('[data-test="title]');
    this.products = page.locator('[data-test="inventory-item-name"]')
    this.paymentInformation = page.locator('[data-test="payment-info-value"]');
    this.shippingInformation = page.locator('[shipping-info-value]');
    this.ItemTotal = page.locator('[data-test="subtotal-label"]');
    this.tax = page.locator('[data-test="tax-label"]');
    this.Total = page.locator('[data-test="total-label"]');
    this.cancelButton = page.locator('[data-test="cancel"]');
    this.Finish = page.locator('[data-test="finish"]');

    }

    async verifyPageTitle() :Promise<void>
    {
    await expect(this.pageTitle).toHaveText("Checkout: Overview");
    }
    async chcekproductispresent(productname: string):Promise<void>
    {
        const product = this.products.filter( {hasText : productname});
        expect(product).toBeVisible();
    }
    async verifyPaymnetInformationIsPresent() :Promise<void>
    
    {
        await expect(this.paymentInformation).toBeVisible();
    }
    async verifyShippingInformationIsPresent():Promise<void>
    {
    await expect(this.shippingInformation).toBeVisible();
    }
    async verifyItemTotalIsPresent():Promise<void>
    {
    await expect(this.ItemTotal).toBeVisible();
    }
    async verifyTaxisAdded() :Promise<void> 
    {
    await expect(this.tax).toBeVisible()
    }
    async getTotal() :Promise<string>
    {
        const totalamount =  await this.Total.innerText();
        return totalamount?.trim() ?? ''
    }

    async cancelbutton():Promise<void>
    {
        await this.cancelButton.click();
    }
    async finishbutton() :Promise<void>
    {
    await this.Finish.click();
    }

}