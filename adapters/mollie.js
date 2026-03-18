import { collectJobs } from "../utils/index.js";

export async function mollie(page) {
  await page.goto("https://jobs.mollie.com/vacancies");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByRole("combobox").first().selectOption("Amsterdam");
  await page.getByRole("combobox").nth(1).selectOption("Engineering");
  await page.waitForTimeout(1000);

  const items = await page
    .locator("div.framer-52ayli-container a div div div p.framer-text")
    .all();

  return collectJobs(
    "Mollie",
    "Online and in-person payments built for businesses of every size.",
    items,
  );
}
