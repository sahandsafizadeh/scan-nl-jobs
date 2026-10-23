import { collectJobs } from "../utils/index.js";

export async function mollie(page) {
  await page.goto("https://jobs.mollie.com/vacancies");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByRole("combobox").first().selectOption("Amsterdam");
  await page.getByRole("combobox").nth(1).selectOption("Engineering");
  await page.waitForTimeout(1000);

  const items = await page
    .locator('div[data-framer-component-type="RichTextContainer"].framer-1s1z1ur p')
    .all();

  return collectJobs(
    "Mollie",
    "Mollie is a Dutch payment service provider for online businesses.",
    items,
  );
}
