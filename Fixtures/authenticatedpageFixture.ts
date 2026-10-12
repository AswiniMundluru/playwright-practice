import { test as base, Page} from "@playwright/test"
import {LoginPage} from "../Pages/loginpage"

type MyFixtures ={

    AuthenticatedPage : LoginPage
}

export const  test  = base.extend<MyFixtures>({

AuthenticatedPage : async ( {page}, use)=>{

    const loginpage= new LoginPage(page);
    await loginpage.navigateToLoginPage();
    await loginpage.login("standard_user" , "secret_sauce");

    await use(loginpage);
}

})

export { expect} from "@playwright/test"
