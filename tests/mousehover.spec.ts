import { test, expect, chromium } from "@playwright/test";

test("mouse hover test using try catch", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const parentpage = await context.newPage();

  await parentpage.goto("https://www.spicejet.com/", { waitUntil: "domcontentloaded" });

  const addons = parentpage.getByText("Add-ons", { exact: true }).first();
  await addons.waitFor({ state: "visible" });
  await addons.hover();

  // 1. Start listening BEFORE clicking (No .catch() wrapper)
  const newPagePromise = context.waitForEvent("page");

  // 2. Perform the click
  await parentpage.getByText("SpiceAssurance").first().click();

  try {
    // 3. Try same-page navigation with a short timeout
    await parentpage.waitForURL(/SpiceAssurance/, { timeout: 2000 });
    console.log("Navigated on the same page");
  } catch {
    // 4. Execution enters here when same-page fails
    // Await the popup promise that was triggered during the click
    const newpage = await newPagePromise;

    await expect(newpage).toHaveURL(/SpiceAssurance/);
    console.log("Opened in a new page successfully");
  }

  await browser.close();

});