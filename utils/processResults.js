import { matches } from "./matching.js";

export async function collectJobs(company, description, items) {
  const result = {
    company,
    description,
    jobs: [],
  };

  for (const item of items) {
    const title = await item.textContent();
    if (matches(title)) {
      result.jobs.push(title);
    }
  }

  return result;
}
