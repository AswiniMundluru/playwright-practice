import { Page, test , expect , Locator} from "@playwright/test";
import rawdata from "./data/testdata.json";

type LoginData = {
  firstName:string,
    lastName:string,
    email: string,
    telephone:string,
    password: string,
    subscribeNewsLetter: 'YES'| 'NO'

};

const logindata : LoginData[] = rawdata as  LoginData[];

for (const data of logindata)

    {
 test(`login validation using ${data.firstName} ` , async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.getByPlaceholder("First Name").fill(data.firstName);
    await page.getByPlaceholder("Last Name").fill(data.lastName);
    await page.getByPlaceholder("E-Mail").fill(data.email);
    await page.getByPlaceholder("Telephone").fill(data.telephone);

    if( data.subscribeNewsLetter === "YES"){

    await page.getByRole("radio", { name: "Yes"}).click();
    }

    else {

        await page.getByRole("radio", { name: "NO"}).click();
    }

 });


}