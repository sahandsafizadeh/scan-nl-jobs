import { matches } from "../utils/utils.js";

export async function bunq(page) {
  // ---------- find jobs ----------
  await page.goto("https://careers.bunq.com/positions");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByText("Netherlands").click();
  await page.getByText("Technology").first().click();
  await page.waitForTimeout(2000);

  const items = await page
    .locator("h3.framer-text.framer-styles-preset-1aceiqc")
    .all();

  // ---------- process results ----------
  const result = {
    company: "Bunq",
    description: "Bunq is a Dutch digital banking app.",
    jobs: [],
  };

  for (const item of items) {
    const title = await item.textContent();
    if (matches(title)) {
      result.jobs.push(title);
    }
  }

  return result;
}
