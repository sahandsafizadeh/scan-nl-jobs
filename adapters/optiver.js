import { collectJobs } from "../utils/index.js";

export async function optiver(page) {
  await page.goto("https://www.optiver.com/join-us/jobs/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByRole("combobox", { name: "Location" }).click();
  await page.getByRole("option", { name: "Amsterdam" }).click();
  await page.keyboard.press("Escape");
  await page.getByRole("combobox", { name: "Department" }).click();
  await page.getByRole("option", { name: "Technology" }).click();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(1000);

  const items = await page
    .locator('a[href^="/join-us/jobs/technology/amsterdam/"]')
    .all();

  return collectJobs(
    "Optiver",
    "Global market maker and trading firm with its headquarters in Amsterdam.",
    items,
  );
}
