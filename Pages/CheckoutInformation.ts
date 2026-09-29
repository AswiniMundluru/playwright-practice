import { Page, Locator , expect} from "@playwright/test"

export class CartInformationPage {

    readonly page: Page;
    readonly pageTitle: Locator;
    readonly firstName :Locator;
    readonly lastName :Locator;
    readonly postalCode: Locator;
    readonly cancelButton :Locator;
    readonly continueButton: Locator;
    readonly errorMessage: Locator;

    constructor(page:Page)
    {
        this.page = page;
        this.pageTitle = page.locator('[data-test="title"]');
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.postalCode = page.getByPlaceholder("Zip/Postal Code");
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.errorMessage = page.locator('[data-test="error"]')
    }
    
        async verifyPageTitle():Promise<void>
        {
        await expect(this.pageTitle).toHaveText("Checkout: Your Information");
        }
        async enterFirstName(firstname:string):Promise<void>
        {
            await this.firstName.fill(firstname)
        }
        async enterLastName(lastname:string):Promise<void>
        {
        await this.lastName.fill(lastname);
        }
        async enterPostalCode(postalcode:string):Promise<void>
        {
        await this.postalCode.fill(postalcode);
        }
        async enterpersonaldetails(firstname:string,lastname:string,postalcode:string):Promise<void>
        {
        await this.enterFirstName(firstname);
        await this.enterLastName(lastname);
        await this.enterPostalCode(postalcode);
        }

        async cancelbutton():Promise<void>
        {
        await this.cancelButton.click();
        }
        async continuebutton() :Promise<void>
        {
            await this.continueButton.click();
        }

        async verifyerrormessage(expectedmessage:string):Promise<void>
        {
        await expect(this.errorMessage).toContainText(expectedmessage);
        }



    }