import { writeFile } from "fs/promises";
import { chromium } from "playwright";
import { adapters } from "./adapters/index.js";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const adapterResults = await Promise.all(
    adapters.map((adapter) => adapter(page)),
  );
  const results = adapterResults.filter(
    (result) => result.jobs && result.jobs.length > 0,
  );

  await writeFile("matched-jobs.json", JSON.stringify(results, null, 2));

  await browser.close();
})();
