import { collectJobs } from "../utils/index.js";

export async function bunq(page) {
  await page.goto("https://careers.bunq.com/positions");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Netherlands").click();
  await page.getByText("Technology").first().click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator("h3.framer-text.framer-styles-preset-1aceiqc")
    .all();

  return collectJobs("Bunq", "Bunq is a Dutch digital banking app.", items);
}
