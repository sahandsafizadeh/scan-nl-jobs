import { collectJobs } from "../utils/index.js";

export async function io(page) {
  await page.goto("https://www.iodigital.com/en/careers/jobs");
  await page.waitForTimeout(15000);
  await page.getByRole("button", { name: "Allow all cookies" }).click();
  await page.getByRole("button", { name: "Campus Chevron icon" }).click();
  await page
    .getByRole("checkbox", { name: /^Amsterdam, The Netherlands/ })
    .check();
  await page
    .getByRole("checkbox", { name: /^Utrecht, The Netherlands/ })
    .check();
  await page.getByRole("button", { name: "Campus Chevron icon" }).click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator(
      "h3.Heading_heading__z1lL6.Heading_headingSize5__grKHj.mb-3.lg\\:mb-4",
    )
    .all();

  return collectJobs("IO", "Digital consulting company.", items);
}
