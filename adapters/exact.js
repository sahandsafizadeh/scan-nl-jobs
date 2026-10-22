import { collectJobs } from "../utils/index.js";

export async function exact(page) {
  await page.goto(
    "https://www.exact.com/careers/vacancies#country=netherlands&specialism=technology",
  );
  await page.getByRole("button", { name: "Agree" }).click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator('.card--vacancy h3 a[href^="/careers/vacancies/"]')
    .all();

  return collectJobs(
    "Exact",
    "Exact is a Dutch software company providing cloud business software for accounting, ERP and payroll.",
    items,
  );
}
