import { collectJobs } from "../utils/index.js";

export async function booking(page) {
  await page.goto("https://jobs.booking.com/booking/jobs");
  await page.getByRole("button", { name: "Accept all cookies" }).click();
  await page.getByRole("combobox", { name: "Search Location" }).click();
  await page.getByRole("combobox", { name: "Search Location" }).fill("Nether");
  await page
    .locator("span")
    .filter({ hasText: /^Netherlands$/ })
    .first()
    .click();
  await page.locator(".mat-select-arrow.ng-tns-c65-3").click();
  await page.locator("#mat-option-73 > .mat-pseudo-checkbox").click();
  await page.waitForTimeout(1000);

  const items = await page
    .locator(
      "div.job-results-container search-job-cards mat-accordion mat-expansion-panel mat-expansion-panel-header span mat-panel-title p.job-title a.job-title-link span",
    )
    .all();

  return collectJobs(
    "Booking.com",
    "Booking.com is a Dutch online travel agency.",
    items,
  );
}
