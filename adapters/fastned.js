import { collectJobs } from "../utils/index.js";

export async function fastned(page) {
  await page.goto("https://fastned.recruitee.com/");
  await page.getByTestId("agree-to-all-cookies").click();
  await page.getByRole("tab", { name: "Netherlands" }).click();

  const showMore = page.getByRole("button", { name: "Show more jobs" });
  while (await showMore.isVisible()) {
    await showMore.click();
    await page.waitForTimeout(1000);
  }

  const items = await page.locator('a[href^="/o/"]').all();

  return collectJobs(
    "Fastned",
    "Fastned is a Dutch company building and operating fast-charging stations for electric vehicles.",
    items,
  );
}
