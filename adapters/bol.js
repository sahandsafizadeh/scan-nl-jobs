import { collectJobs } from "../utils/index.js";

export async function bol(page) {
  await page.goto("https://careers.bol.com/en/jobs/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByRole("button", { name: "Category" }).click();
  await page.getByRole("checkbox", { name: "Tech", exact: true }).check();
  await page.goto("https://careers.bol.com/en/jobs/?doelgroep[]=12124747002");
  await page.getByRole("button", { name: "Category" }).click();
  await page.getByRole("button", { name: "Job experience" }).click();
  await page.getByRole("checkbox", { name: "-7" }).check();
  await page.goto(
    "https://careers.bol.com/en/jobs/?doelgroep[]=12124747002&werkervaring[]=12105667002",
  );
  await page.getByRole("button", { name: "Job experience" }).click();
  await page.getByRole("button", { name: "Language" }).click();
  await page.getByRole("checkbox", { name: "Dutch" }).uncheck();
  await page.goto(
    "https://careers.bol.com/en/jobs/?doelgroep[]=12124747002&languages[]=en&werkervaring[]=12105667002",
  );
  await page.waitForTimeout(1000);

  const items = await page
    .locator("a.VacatureCard-link.relativeToParent")
    .all();

  return collectJobs(
    "Bol",
    "Bol is the largest e-commerce platform in the Netherlands and Belgium, operating as a comprehensive online marketplace.",
    items,
  );
}
