# Scan NL Jobs

A lightweight Node.js utility that uses [Playwright](https://playwright.dev) to crawl careers pages of Dutch technology companies and collect software development job listings. The tool is designed for flexibility: you can customize how jobs are matched and easily add new company adapters.

## ✅ Features

- Crawls job postings from various company career sites.
- Jobs are filtered by a customizable matching function (text-based).
- Adapter-based architecture makes it easy to add new companies.
- Outputs a JSON file containing all matched positions.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Playwright installed globally or as a dev dependency

### Installation

```sh
git clone <your-repo-url>
cd scan-nl-jobs
npm install
```

### Running the Application

Execute the main script from the root directory:

```sh
node index.js
```

This will run all adapters, apply the matching logic, and write the results to `matched-jobs.json`. The structure looks like:

```json
[
  {
    "company": "some-company",
    "description": "some-company description",
    "jobs": ["Backend Developer", "Software Engineer"]
  },
  ...
]
```

### Configuration

The matching logic lives in `matcher/index.js` and only needs to return `true` or `false` based on the **job title** passed in. Feel free to modify or replace this with more advanced criteria (regexes, keyword lists, etc.).

## 🛠️ Adding a New Company

To scrape another employer's listings:

1. **Create a new adapter file** under `adapters/` (e.g. `mycompany.js`).
2. **Generate Playwright steps** to navigate to the filtered job results:

   ```sh
   npx playwright codegen https://careers.example.com/search
   ```

   - Interact with the browser until you reach a page showing the jobs you want.
   - Playwright will record the steps you perform; paste the resulting actions into your adapter.

3. **Locate and collect job items** in the adapter. The existing adapters show common patterns for querying DOM elements and normalizing fields.

4. **Add adapter function** to the `adapters/index.js` exported list.
