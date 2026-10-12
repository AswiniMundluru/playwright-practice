import {  Page , Locator } from '@playwright/test';
import{LoginPage} from '../Pages/loginpage';
import {test , expect } from '../Fixtures/loginpageFixture'

test ( "Login Page" , async ({page,loginpage}) => {

await loginpage.navigateToLoginPage();
await loginpage.login('standard_user' , 'secret_sauce');

});