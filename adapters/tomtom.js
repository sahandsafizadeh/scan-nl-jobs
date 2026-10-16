import { collectJobs } from "../utils/index.js";

export async function tomtom(page) {
  await page.goto(
    "https://www.tomtom.com/careers/joboverview/?location=amsterdam&category=engineering",
  );
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator('[data-subcomponent-name="job-result-item"] p.headline3')
    .all();

  return collectJobs(
    "TomTom",
    "TomTom is a Dutch location technology company that builds maps and navigation software.",
    items,
  );
}
