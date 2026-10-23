import { collectJobs } from "../utils/index.js";

export async function imc(page) {
  await page.goto("https://www.imc.com/eu/search-careers");
  await page.getByRole("button", { name: "Accept All Cookies" }).click();
  await page
    .locator("label")
    .filter({ hasText: "Experience levelAll" })
    .locator("svg")
    .click();
  await page.getByText("Experienced").first().click();
  await page
    .locator("label")
    .filter({ hasText: "LocationAll" })
    .locator("svg")
    .click();
  await page.getByText("Amsterdam").first().click();
  await page
    .locator("label")
    .filter({ hasText: "Business functionAll" })
    .locator("svg")
    .click();
  await page.getByText("Technology").nth(1).click();
  await page.waitForTimeout(1000);

  const items = await page.locator('a[href^="/eu/careers/jobs/"] h2').all();

  return collectJobs(
    "IMC Trading",
    "Global market maker and trading firm with a large Amsterdam office.",
    items,
  );
}
