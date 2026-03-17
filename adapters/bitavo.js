import { collectJobs } from "../utils/index.js";

export async function bitavo(page) {
  await page.goto("https://jobs.bitvavo.com/find-your-role");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.waitForTimeout(1000);

  const items = await page.locator("li a div div h3").all();

  return collectJobs(
    "Bitavo",
    "Provides a regulated platform for buying, selling, and storing over 400 digital assets.",
    items,
  );
}
