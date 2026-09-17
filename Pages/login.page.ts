import { expect, Page, Locator } from '@playwright/test';

export class LoginPage {

    //read only locators
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('.error-message');
    }


    async navigateToLoginPage() : Promise<void> {
        await this.page.goto('https://www.saucedemo.com' , { waitUntil : "domcontentloaded"});
    }

    async enterUsername(username: string) : Promise<void> {
        await this.usernameInput.fill(username);
    }

    async enterPassword( password: string) :Promise<void>{
        await this.passwordInput.fill(password);
    }

async login ( username: string , password: string) {

    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.loginButton.click(); 
}

async verifyloginerror (expectedmessage: string) :Promise<void> {

    await expect(this.errorMessage).toContainText("expectedmessage");
}


}

