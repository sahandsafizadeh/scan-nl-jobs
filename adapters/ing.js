import { matches } from "../utils/utils.js";

export async function ing(page) {
  // ---------- find jobs ----------
  await page.goto("https://careers.ing.com/en/search-jobs");
  await page.getByRole("button", { name: "Accept all cookies" }).click();
  await page.locator("label").filter({ hasText: "Netherlands" }).click();
  await page.locator("label").filter({ hasText: "Full time" }).click();
  await page.locator("label").filter({ hasText: "IT Engineering" }).click();
  await page.locator("label").filter({ hasText: "IT Architecture" }).click();
  await page.waitForTimeout(2000);

  const items = await page
    .locator("h2.search-results-item__title.vacancy-item__title")
    .all();

  // ---------- process results ----------
  const result = {
    company: "ING",
    description:
      "ING is a global bank offering retail and commercial banking services.",
    jobs: [],
  };

  for (const item of items) {
    const title = await item.textContent();
    if (matches(title)) {
      result.jobs.push(title);
    }
  }

  return result;
}
