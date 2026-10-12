import { test as base , Page } from "@playwright/test"
import { LoginPage } from "../Pages/loginpage"

 type MyFixtures = {

loginpage: LoginPage

}

export const test = base.extend<MyFixtures>({

loginpage: async ({ page }, use) =>{

    const loginpage =  new LoginPage(page);
     await use(loginpage);
}

});

export { expect } from "@playwright/test"