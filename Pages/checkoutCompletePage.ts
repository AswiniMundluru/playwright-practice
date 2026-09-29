import { Page, Locator, expect} from "@playwright/test"

export class CheckoutCompletePage
{

    readonly page : Page;
    readonly pageTitle: Locator;
    readonly thankyouMessage :Locator;
    readonly messageDescription: Locator;
    readonly backHome :Locator;
    readonly generatepdforder :Locator;

    constructor(page:Page)

    {
        this.page = page;
        this.pageTitle = page.locator('[data-test="title"]');
        this.thankyouMessage = page.locator('[data-test="complete-header"]');
        this.messageDescription =page.locator('[data-test="complete-text"]');
        this.backHome = page.getByRole("button", {name: "Back Home"});
        this.generatepdforder = page.getByRole("button", {name: "Generate PDF order"});
    }

    async verifyPageTitle():Promise<void>
    {
        await expect(this.pageTitle).toHaveText('Checkout: Complete!');
    }
    async verifyThankyouMessage() :Promise<void>
    {
        await expect(this.thankyouMessage).toHaveText("Thank you for your order!");
    }
    async verifyMessageDescription() :Promise<void>
    { 
        await expect(this.messageDescription).toContainText("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    }
    async backHomeButton():Promise<void>    
    {
        await this.backHome.click();
    }
    async generatePDFOrder()
    {
        await this.generatepdforder.click();
    }
}