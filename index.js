import { writeFileSync } from "fs";
import { chromium } from "playwright";
import { adapters } from "./adapters/index.js";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = [];
  for (const adapter of adapters) {
    const result = await adapter(page);
    if (result.jobs && result.jobs.length > 0) {
      results.push(result);
    }
  }

  writeFileSync("matched-jobs.json", JSON.stringify(results, null, 2));

  await browser.close();
})();
