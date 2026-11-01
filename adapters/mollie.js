import { collectJobs } from "../utils/index.js";

export async function mollie(page) {
  await page.goto("https://jobs.mollie.com/vacancies");
  await page
    .getByRole("button", { name: "Accept all" })
    .click({ timeout: 3000 })
    .catch(() => { });
  await page.waitForTimeout(1000);

  const rows = await page
    .locator('a[href^="./vacancies/"]')
    .filter({ hasText: "Amsterdam" })
    .filter({ hasText: "Engineering" })
    .all();
  const items = rows.map((row) => row.locator("p").first());

  return collectJobs(
    "Mollie",
    "Mollie is a Dutch payment service provider for online businesses.",
    items,
  );
}
