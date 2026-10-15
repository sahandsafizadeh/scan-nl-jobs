import { collectJobs } from "../utils/index.js";

export async function bol(page) {
  await page.goto(
    "https://careers.bol.com/en/jobs/?expertise[]=tech&language[]=en_US",
  );
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.waitForTimeout(1000);

  const items = await page.locator('h3[class*="JobCard_titleLayout"]').all();

  return collectJobs(
    "Bol",
    "Bol is the largest e-commerce platform in the Netherlands and Belgium, operating as a comprehensive online marketplace.",
    items,
  );
}
