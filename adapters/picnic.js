import { collectJobs } from "../utils/index.js";

export async function picnic(page) {
  await page.goto("https://jobs.picnic.app/en/vacancies");
  await page.getByRole("button", { name: "Allow all" }).click();
  await page.getByRole("checkbox", { name: "Netherlands" }).check();
  await page.getByRole("checkbox", { name: "Engineering" }).check();
  await page.waitForTimeout(1000);

  const items = await page
    .locator('a[href^="/en/vacancies/"] strong h4')
    .all();

  return collectJobs(
    "Picnic",
    "Picnic is a Dutch online grocery delivery service.",
    items,
  );
}
