import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { Search } from "../pages/Search";

test('Search for "laptop" then verify relevant results are returned', async ({
  page,
}) => {
  const homePage = new HomePage(page);
  const searchPage = new Search(page);
  await homePage.goto();
  await homePage.searchInput.fill("Laptop");
  await homePage.searchButton.click();

  await expect(searchPage.productItem.first()).toBeVisible();
  await expect(searchPage.productText.first()).toBeVisible();
});
