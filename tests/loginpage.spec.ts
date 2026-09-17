import { test , Page , expect , Locator } from '@playwright/test';
import{LoginPage} from '../Pages/login.page';

test ( "Login Page" , async ({page}) => {

const loginpage = new LoginPage(page);
await loginpage.navigateToLoginPage();
await loginpage.login('standard_user' , 'secret_sauce');

});