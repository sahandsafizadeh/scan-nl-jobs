import { collectJobs } from "../utils/index.js";

export async function miro(page) {
  await page.goto(
    "https://miro.com/careers/open-positions/?location=amsterdam-nl&page=1&department=engineering",
  );
  await page.waitForTimeout(1000);

  const items = await page.locator('h3[class*="PositionsList_position"]').all();

  return collectJobs(
    "Miro",
    "Miro is a visual collaboration platform that helps teams work together on a shared online whiteboard.",
    items,
  );
}
