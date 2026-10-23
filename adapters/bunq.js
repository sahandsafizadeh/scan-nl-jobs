import { collectJobs } from "../utils/index.js";

export async function bunq(page) {
  await page.goto("https://careers.bunq.com/positions");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Filter by location$/ })
    .nth(2)
    .click();
  await page.getByRole("option", { name: "Amsterdam" }).click();
  await page
    .locator("div")
    .filter({ hasText: /^Filter by department$/ })
    .nth(2)
    .click();
  await page.getByRole("option", { name: "Technology" }).click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator('article[id^="card-job-list-item"] h3[data-framer-name="Title"]')
    .all();

  return collectJobs("Bunq", "Bunq is a Dutch digital banking app.", items);
}
