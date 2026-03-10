import { collectJobs } from "../utils/index.js";

export async function housinganywhere(page) {
  await page.goto("https://job-boards.greenhouse.io/housinganywhere");
  await page.getByRole("button", { name: "Toggle flyout" }).nth(1).click();
  await page.getByText("Rotterdam, Netherlands").click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator("tr.job-post td.cell a p.body.body--medium")
    .all();

  return collectJobs(
    "HousingAnywhere",
    "HousingAnywhere is a platform that connects tenants with landlords.",
    items,
  );
}
