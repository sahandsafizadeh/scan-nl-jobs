import { collectJobs } from "../utils/index.js";

export async function eurail(page) {
  await page.goto("https://www.eurail.com/careers");
  await page.getByRole("button", { name: "Allow all cookies" }).click();
  await page.waitForTimeout(1000);

  const items = await page.locator("h3.vacancies__vacancy-title").all();

  return collectJobs(
    "Eurail",
    "Provide flexible, multi-destination rail travel across 33 European countries for both international and European residents.",
    items,
  );
}
