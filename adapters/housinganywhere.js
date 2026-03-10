import { matches } from "../utils/utils.js";

export async function housinganywhere(page) {
  // ---------- find jobs ----------
  await page.goto("https://job-boards.greenhouse.io/housinganywhere");
  await page.getByRole("button", { name: "Toggle flyout" }).nth(1).click();
  await page.getByText("Rotterdam, Netherlands").click();
  await page.waitForTimeout(2000);

  const items = await page
    .locator("tr.job-post td.cell a p.body.body--medium")
    .all();

  // ---------- process results ----------
  const result = {
    company: "HousingAnywhere",
    description:
      "HousingAnywhere is a platform that connects tenants with landlords.",
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
