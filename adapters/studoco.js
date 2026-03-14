import { collectJobs } from "../utils/index.js";

export async function studocu(page) {
  await page.goto("https://jobs.studocu.com/job-postings");
  await page.getByRole("tab", { name: "Tech" }).click();
  await page.waitForTimeout(1000);

  const items = await page.locator("a.sc-18rtkup-2.gLDpSw").all();

  return collectJobs("Studocu", "Global educational platform.", items);
}
