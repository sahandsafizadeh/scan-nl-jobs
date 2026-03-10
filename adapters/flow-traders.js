import { collectJobs } from "../utils/index.js";

export async function flowtraders(page) {
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
  await page.waitForTimeout(1000);

  const items = await page
    .locator("h2")
    .filter({ hasClass: /syneFont/ })
    .filter({ hasClass: /text-\[#161616\]/ })
    .all();

  return collectJobs(
    "Flow Traders",
    "Global financial liquidity provider that specializes in exchange-traded products (ETPs).",
    items,
  );
}
