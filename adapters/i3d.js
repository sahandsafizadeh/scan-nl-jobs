import { collectJobs } from "../utils/index.js";

export async function i3d(page) {
  await page.goto("https://www.i3d.net/career/");
  await page
    .getByRole("button", { name: "Accept cookies" })
    .click({ timeout: 3000 })
    .catch(() => { });

  const items = await page.locator(".vacancy-item .vacancy-title a").all();

  return collectJobs(
    "i3D.net",
    "i3D.net is a Rotterdam-based game server hosting and infrastructure provider.",
    items,
  );
}
