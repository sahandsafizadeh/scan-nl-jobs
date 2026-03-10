import { matches } from "../utils/utils.js";

export async function picnic(page) {
  // ---------- find jobs ----------
  await page.goto("https://jobs.picnic.app/en/vacancies");
  await page.getByRole("button", { name: "Accept" }).click();
  await page.getByRole("checkbox", { name: "Netherlands" }).check();
  await page.getByRole("checkbox", { name: "Engineering" }).check();
  await page.getByRole("button", { name: "Show 3 more" }).click();
  await page.waitForTimeout(2000);

  const items = await page
    .locator(
      "li.MuiListItem-root.MuiListItem-gutters.py-6.md\\:py-8.mui-1ohqk82 a div.flex.w-full.flex-col.justify-between.md\\:flex-row div strong h4",
    )
    .all();

  // ---------- process results ----------
  const result = {
    company: "Picnic",
    description: "Picnic is a Dutch online grocery delivery service.",
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
