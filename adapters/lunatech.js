import { collectJobs } from "../utils/index.js";

export async function lunatech(page) {
  await page.goto("https://recruitment.lunatech.com/");
  await page.getByTestId("agree-to-all-cookies").click();
  await page.waitForTimeout(1000);

  const items = await page.locator("a.sc-18rtkup-2.GIrIJ").all();

  return collectJobs(
    "Lunatech",
    "Software development consultancy that specializes in building and modernizing complex back-office systems.",
    items,
  );
}
