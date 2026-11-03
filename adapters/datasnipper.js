import { collectJobs } from "../utils/index.js";

export async function datasnipper(page) {
  await page.goto(
    "https://careers.datasnipper.com/job-listing?ashby_department_id=04f675e4-f9ac-4517-ab09-2a44d3f8137f&ashby_location_id=aef2d678-209d-4edd-8b9d-484d1d57cbd8",
  );
  await page
    .getByRole("button", { name: "Accept" })
    .click({ timeout: 3000 })
    .catch(() => { });

  const board = page.frameLocator('iframe[title="Ashby Job Board"]');
  await board.locator("h3.ashby-job-posting-brief-title").first().waitFor();

  const items = await board.locator("h3.ashby-job-posting-brief-title").all();

  return collectJobs(
    "DataSnipper",
    "DataSnipper is a Dutch software company building AI-powered audit and finance automation tools for Excel.",
    items,
  );
}
