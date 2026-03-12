import { collectJobs } from "../utils/index.js";

export async function bol(page) {
  await page.goto("https://careers.bol.com/en/jobs/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByRole("button", { name: "Category" }).click();
  await page.getByRole("checkbox", { name: "Tech", exact: true }).check();
  await page.getByRole("button", { name: "Job experience" }).click();
  await page.getByRole("checkbox", { name: "4-7" }).check();
  await page.getByRole("button", { name: "Language" }).click();
  await page.getByRole("checkbox", { name: "Dutch" }).uncheck();
  await page.waitForTimeout(1000);

  const items = await page
    .locator("a.VacatureCard-link.relativeToParent")
    .all();

  return collectJobs(
    "Bol",
    "Bol is the largest e-commerce platform in the Netherlands and Belgium, operating as a comprehensive online marketplace.",
    items,
  );
}
