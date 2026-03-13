import { collectJobs } from "../utils/index.js";

export async function companyinfo(page) {
  await page.goto("https://workingatcompanyinfo.nl/vacancies");
  await page.getByText("IT", { exact: true }).click();
  await page.waitForTimeout(1000);

  const items = await page.locator("a.vacancy-index-item-title").all();

  return collectJobs(
    "Company Info",
    "provider of B2B data and insights that helps professionals with lead generation, risk assessment, and compliance.",
    items,
  );
}
