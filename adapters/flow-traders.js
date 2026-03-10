import { matches } from "../utils/utils.js";

export async function flowtraders(page) {
  // ---------- find jobs ----------
  await page.goto("https://www.flowtraders.com/careers/job-search");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.locator(".w-full.flex.items-center.h-4").first().click();
  await page.locator("#filter").getByText("Technology").click();
  await page.locator("div").filter({ hasText: "Keyword" }).nth(2).click();
  await page.getByRole("img").filter({ hasText: /^$/ }).nth(5).click();
  await page
    .locator("div")
    .filter({ hasText: /^Amsterdam$/ })
    .nth(3)
    .click();
  await page.locator("div").filter({ hasText: "Keyword" }).nth(2).click();
  await page.getByRole("button", { name: "Search" }).click();
  await page.waitForTimeout(2000);

  const items = await page
    .locator("h2")
    .filter({ hasClass: /syneFont/ })
    .filter({ hasClass: /text-\[#161616\]/ })
    .all();

  // ---------- process results ----------
  const result = {
    company: "Flow Traders",
    description:
      "Global financial liquidity provider that specializes in exchange-traded products (ETPs).",
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
