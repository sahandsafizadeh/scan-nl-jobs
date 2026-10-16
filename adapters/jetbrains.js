import { collectJobs } from "../utils/index.js";

export async function jetbrains(page) {
  await page.goto("https://www.jetbrains.com/careers/jobs/");
  await page.getByRole("button", { name: "Accept All" }).click();
  await page.getByRole("button", { name: "Locations" }).click();
  await page.getByText("Amsterdam", { exact: true }).first().click();
  await page.waitForTimeout(1000);

  const items = await page.locator("a.vacancy-card > div > span").all();

  return collectJobs(
    "JetBrains",
    "JetBrains is a software company that makes developer tools such as IntelliJ IDEA.",
    items,
  );
}
