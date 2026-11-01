import { collectJobs } from "../utils/index.js";

export async function flowtraders(page) {
  await page.goto("https://www.flowtraders.com/careers/job-search");
  const filter = page.locator("#filter");
  await filter.waitFor();
  // The cookie banner doesn't always show up
  await page
    .getByRole("button", { name: "Accept all" })
    .click({ timeout: 3000 })
    .catch(() => { });

  await filter.getByText("Select a location").click();
  await filter.getByText("Amsterdam", { exact: true }).click();
  await filter.getByText("Select a division").click();
  await filter.getByText("Technology", { exact: true }).click();
  await page.getByRole("button", { name: "Search" }).click();
  await page.waitForTimeout(2000);

  const items = await page.locator("h2.syneFont").all();

  return collectJobs(
    "Flow Traders",
    "Global financial liquidity provider that specializes in exchange-traded products (ETPs).",
    items,
  );
}
