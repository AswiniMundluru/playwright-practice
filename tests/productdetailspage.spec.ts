import { Page , Locator}  from "@playwright/test"
import { LoginPage } from "../Pages/loginpage"
import { InventoryPage } from "../Pages/inventorypage"
import { ProductDetails} from "../Pages/productdetailspage"
import { test, expect } from "../Fixtures/AllFixtures"

test.describe( "saucelabs test login and product verification" , async() =>{

test.beforeEach("verify login with valid creds" , async({page ,loginpage, logindata})=>{

    await loginpage.navigateToLoginPage();
    await loginpage.login(logindata.username ,logindata.password); 

})

test("verify login error with invalid credentials" , async({page , loginpage})=>{

    await loginpage.navigateToLoginPage();
    await loginpage.login("locked_out_user" , "secret_sauce");
    await loginpage.verifyloginerror("Epic sadface: Sorry, this user has been locked out.")
})

test("verify Product Count" , async({page , inventorypage})=>{

    await inventorypage.getinventoryitemscount();

})

test( "verify sort using price low to high", async({page , inventorypage})=>{

   
     await inventorypage.sortoptionselection("lohi");

}) 

test("verify product name", async({page , inventorypage})=>{


    await inventorypage.selectproduct("Sauce Labs Onesie");

})

test ("verify add product to cart after selecting it" , async({page , inventorypage})=>{

    
    await inventorypage.selectproduct("Sauce Labs Onesie");
    const productspage =new ProductDetails(page);
    await productspage.verifyclickaddtocart();

})

test("verify products are removed from cart" , async({page , inventorypage})=>{

    await inventorypage.selectproduct("Sauce Labs Onesie");
    const productspage =new ProductDetails(page);
    await productspage.verifyclickaddtocart();
    await productspage.verifyremovefromcart();

})

})