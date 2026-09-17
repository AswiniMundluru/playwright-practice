import { Page , test , expect , Locator} from  "@playwright/test" 

test.describe ("frames handling" , () => {

   
    test.skip("Frame1" , async({page}) =>{

        await page.goto("https://ui.vision/demo/webtest/frames/");
        const frame1 =  page.frameLocator('frame[src= "frame_1.html"]');
        await frame1.locator('input[name="mytext1"]').fill("welcome");
        await expect(frame1.locator('input[name="mytext1"]')).toHaveValue("welcome")

    });


    test.skip("Frame2", async({page})=>{

        await page.goto("https://ui.vision/demo/webtest/frames/");
        const frame2=  page.frameLocator('frame[src= "frame_2.html"]');
        await frame2.locator('input[name="mytext2"]').fill("welcome");
        await expect(frame2.locator('input[name="mytext2"]')).toHaveValue("welcome");
    });

    test.skip("Frame3" , async ({page})=>{

        await page.goto("https://ui.vision/demo/webtest/frames/");
        const frame3 =  page.frameLocator('frame[src= "frame_3.html"]');
        await frame3.locator('input[name="mytext3"]').fill("welcome");
        await expect(frame3.locator('input[name="mytext3"]')).toHaveValue("welcome");

        const iframe = frame3.frameLocator('iframe');
        await iframe.getByRole("radio", { name: "Hi, I am the UI.Vision IDE"}).click();
        await iframe.getByRole("checkbox", { name: "Web Testing"}).click();
        await iframe.getByRole("button", { name: "Next"}).click();

        await iframe.getByRole("textbox",{ name :"Enter a short text" }).fill("Aswini");
        await iframe.getByRole("textbox", { name: "Enter a long answer"}).fill("How are you?");
        await iframe.getByRole("button", { name : "Submit"}).click();
        const confirmationmessage = await iframe.locator(".vHW8K").innerText();
        await expect(confirmationmessage).toContain("this is just a test form, all submitted data is automatically deleted");

    })

    test.skip( "frame4", async({page})=>{

     await page.goto("https://ui.vision/demo/webtest/frames/");
     const frame4=  page.frameLocator('frame[src= "frame_4.html"]');
     await frame4.locator('input[name="mytext4"]').fill("welcome");
     await expect(frame4.locator('input[name="mytext4"]')).toHaveValue("welcome");

    });

    test( "frame5", async({page})=>{

     await page.goto("https://ui.vision/demo/webtest/frames/");
     const frame5=  page.frameLocator('frame[src= "frame_5.html"]');
     await frame5.locator('input[name="mytext5"]').fill("welcome");
     await expect(frame5.locator('input[name="mytext5"]')).toHaveValue("welcome");

     await frame5.getByText("https://a9t9.com").click();
     await page.waitForTimeout(5000);

     await expect(frame5.getByAltText('Ui.Vision by a9t9 software - Image-Driven Automation')).toBeVisible();

    });


});