import { collectJobs } from "../utils/index.js";

export async function justeattakeaway(page) {
  await page.goto(
    "https://careers.justeattakeaway.com/global/en/the-netherlands",
  );
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByRole("checkbox", { name: /^Tech & Product/ }).check();
  await page.waitForTimeout(1000);

  const items = await page.locator('h3 a[data-ph-at-id="job-link"]').all();

  return collectJobs(
    "Just Eat Takeaway.com",
    "Just Eat Takeaway.com is a Dutch online food delivery marketplace.",
    items,
  );
}
