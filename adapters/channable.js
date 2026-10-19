import { collectJobs } from "../utils/index.js";

export async function channable(page) {
  await page.goto("https://jobs.channable.com/");
  await page.getByRole("button", { name: "Allow all" }).click();
  await page.getByRole("button", { name: "×" }).click();
  await page.getByRole("tab", { name: "Engineering" }).click();
  await page.waitForTimeout(1000);

  const items = await page.locator('a[href^="/o/"]').all();

  return collectJobs(
    "Channable",
    "Channable is a Dutch software company offering a feed management and marketing automation platform.",
    items,
  );
}
