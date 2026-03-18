import { matches } from "../matcher/index.js";

export async function abnamro(page) {
  await page.goto("https://www.werkenbijabnamro.nl/en/vacancies");
  await page.getByRole("button", { name: "I accept" }).click();
  await page.getByRole("button", { name: /^Department/ }).click();
  await page.locator("#facet_list").getByText("IT", { exact: true }).click();
  await page.getByRole("checkbox", { name: "Netherlands" }).check();
  await page.getByRole("checkbox", { name: "Professional" }).check();

  let jobs = [];
  const items = [];

  jobs = await collectAbnamroJobs(page);
  items.push(...jobs);

  if (page.getByRole("link", { name: "2" }).isVisible()) {
    await page.getByRole("link", { name: "2" }).click();
    jobs = await collectAbnamroJobs(page);
    items.push(...jobs);
  }

  if (page.getByRole("link", { name: "3" }).isVisible()) {
    await page.getByRole("link", { name: "3" }).click();
    jobs = await collectAbnamroJobs(page);
    items.push(...jobs);
  }

  return {
    company: "ABN AMRO",
    description: "ABN AMRO is a leading financial services company.",
    jobs: items,
  };
}

// ----- helpers -----

async function collectAbnamroJobs(page) {
  await page.waitForTimeout(1000);
  const items = await page.locator("h2.card-title").all();

  const jobs = [];
  for (const item of items) {
    const title = await item.textContent();
    if (matches(title)) {
      jobs.push(title);
    }
  }

  return jobs;
}
