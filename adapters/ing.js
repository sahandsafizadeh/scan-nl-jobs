import { collectJobs } from "../utils/index.js";

export async function ing(page) {
  await page.goto("https://careers.ing.com/en/search-jobs");
  await page.getByRole("button", { name: "Accept all cookies" }).click();
  await page.locator("label").filter({ hasText: "Netherlands" }).click();
  await page.locator("label").filter({ hasText: "Full time" }).click();
  await page.locator("label").filter({ hasText: "IT Engineering" }).click();
  await page.locator("label").filter({ hasText: "IT Architecture" }).click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator("h2.search-results-item__title.vacancy-item__title")
    .all();

  return collectJobs(
    "ING",
    "ING is a global bank offering retail and commercial banking services.",
    items,
  );
}
