import { test, Page, Locator, expect} from "@playwright/test"
import { LoginPage } from "../Pages/loginpage"
import { InventoryPage } from "../Pages/inventorypage"
import { CartInformationPage } from "../Pages/CheckoutInformation"
import { Cart } from "../Pages/cartPage"
import { CheckOutOverviewPage } from "../Pages/checkoutOverviewPage"
import { CheckoutCompletePage } from "../Pages/checkoutCompletePage"
import { ProductDetails } from "../Pages/productdetailspage"

test.describe("swag labs testing", async()=>{

test.beforeEach( "login using valid credentials" , async ({page})=>{

    const loginpage = new LoginPage(page);
    await loginpage.navigateToLoginPage();
    await loginpage.login("standard_user","secret_sauce");

})
test("select product from the inventory page and add it to cart", async({page})=>{

    const inventorypage = new InventoryPage(page);
    await inventorypage.addproducttocart("Sauce Labs Onesie");
})

test("checks the products added to cart and open cart" , async({page})=>{

    const inventorypage = new InventoryPage(page);
    await inventorypage.addproducttocart("Sauce Labs Backpack");
    await inventorypage.opencart();
    const cartpage = new Cart(page);
    await cartpage.VerifyProductIsPresent("Sauce Labs Backpack");
    await cartpage.verifycontinueshoppinglink();
})


test( "Finish checkout" ,async({page})=>{

    const inventorypage = new InventoryPage(page);
    await inventorypage.addproducttocart("Sauce Labs Backpack");
    await inventorypage.opencart();
    const cartpage = new Cart(page);
    await cartpage.VerifyProductIsPresent("Sauce Labs Backpack");
    await cartpage.verifycheckoutbutton();
    const checkoutinformation = new CartInformationPage(page);
    await checkoutinformation.enterpersonaldetails("Aswini","Mundluru","2800");
    await checkoutinformation.continuebutton();
    const checkoutoverveiwpage = new CheckOutOverviewPage(page);
    await checkoutoverveiwpage.verifyItemTotalIsPresent()
    await checkoutoverveiwpage.verifyTaxisAdded();
    await checkoutoverveiwpage.getTotal();
    await checkoutoverveiwpage.finishbutton();
    const checkoutcompletepage = new CheckoutCompletePage(page);
    await checkoutcompletepage.verifyThankyouMessage();
    await checkoutcompletepage.verifyMessageDescription();
    await checkoutcompletepage.generatePDFOrder();


})

})

