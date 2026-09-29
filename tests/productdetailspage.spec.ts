import { test , expect , Page , Locator}  from "@playwright/test"
import { LoginPage } from "../Pages/loginpage"
import { InventoryPage } from "../Pages/inventorypage"
import { ProductDetails} from "../Pages/productdetailspage"

test.describe( "saucelabs test login and product verification" , async() =>{

test.beforeEach("verify login with valid creds" , async({page})=>{

    const loginpage = new LoginPage(page);
    await loginpage.navigateToLoginPage();
    await loginpage.login("standard_user" ,"secret_sauce"); 

})

test("verify login error with invalid credentials" , async({page})=>{

    const loginpage = new LoginPage(page);
    await loginpage.navigateToLoginPage();
    await loginpage.login("locked_out_user" , "secret_sauce");
    await loginpage.verifyloginerror("Epic sadface: Sorry, this user has been locked out.")
})

test("verify Product Count" , async({page})=>{

    const inventorypage = new InventoryPage(page);
    await inventorypage.getinventoryitemscount();

})

test( "verify sort using price low to high", async({page})=>{

     const inventorypage = new InventoryPage(page);
     await inventorypage.sortoptionselection("lohi");

}) 

test("verify product name", async({page})=>{

    const inventorypage = new InventoryPage(page);
    await inventorypage.selectproduct("Sauce Labs Onesie");

})

test ("verify add product to cart after selecting it" , async({page})=>{

    const inventorypage = new InventoryPage(page);
    await inventorypage.selectproduct("Sauce Labs Onesie");
    const productspage =new ProductDetails(page);
    await productspage.verifyclickaddtocart();

})

test("verify products are removed from cart" , async({page})=>{

    const inventorypage = new InventoryPage(page);
    await inventorypage.selectproduct("Sauce Labs Onesie");
    const productspage =new ProductDetails(page);
    await productspage.verifyclickaddtocart();
    await productspage.verifyremovefromcart();

})

})