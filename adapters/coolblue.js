import { collectJobs } from "../utils/index.js";

export async function coolblue(page) {
  await page.goto(
    "https://www.coolblue.nl/en/vacancies/search?functions=tech&page=1",
  );
  await page.getByRole("button", { name: "Accept everything" }).click();
  await page.waitForTimeout(1000);

  const items = await page.locator('a[href^="/en/vacancies/"] h3').all();

  return collectJobs(
    "Coolblue",
    "Coolblue is a Dutch online retailer of electronics and household appliances.",
    items,
  );
}
