import { test as base} from "@playwright/test"
import { LoginPage } from "../Pages/loginpage"
import { InventoryPage} from "../Pages/inventorypage"
import { ProductDetails} from "../Pages/productdetailspage"

type FrameworkFixues = {

    logindata : { username:string , password: string};
    loginpage: LoginPage;
    inventorypage: InventoryPage;
    authenticatedpage: LoginPage;
    autologger: void;

}

export const test = base.extend<FrameworkFixues>({


logindata : async({page}, use)=> {

    const logindata = {

         username:  'standard_user',
         password : 'secret_sauce'
    }
    await use(logindata)
},

loginpage: async ( {page} , use)=>{

    const loginpage = new LoginPage(page);
    await use(loginpage)
},


inventorypage : async({page}, use) =>{

const inventorypage = new InventoryPage(page);
await use(inventorypage)
},

authenticatedpage : async ( {page , logindata, loginpage}, use) =>{

    await test.step ("Authenticate automatically" , async() =>{

    await loginpage.navigateToLoginPage;
    await loginpage.login(logindata.username , logindata.password);

    } , { box: true});

    await use(loginpage);
},

autologger : [async ({}, use ,testInfo) =>{

    await use();
}, { auto : true}]

});

export { expect} from "@playwright/test"

