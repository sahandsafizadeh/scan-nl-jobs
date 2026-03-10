import { collectJobs } from "../utils";

export async function adyen(page) {
  await page.goto("https://careers.adyen.com/vacancies");
  await page.getByRole("button", { name: "Accept All Cookies" }).click();
  await page.getByRole("combobox", { name: "Team" }).click();
  await page.getByRole("combobox", { name: "Team" }).fill("dev");
  await page
    .getByRole("option", { name: "development-team Development" })
    .click();
  await page.getByRole("combobox", { name: "Location" }).click();
  await page.getByRole("combobox", { name: "Location" }).fill("am");
  await page.getByRole("option", { name: "amsterdam Amsterdam" }).click();
  await page.waitForTimeout(2000);

  const items = await page
    .locator(
      ".ds-button-link.ds-button-link--primary.ds-button-link--black-green.vacancies-list-item__link",
    )
    .all();

  return collectJobs("Adyen", "Global financial technology platform.", items);
}
