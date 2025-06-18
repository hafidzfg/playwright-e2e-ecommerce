import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { Search } from "../pages/Search";

test.describe("Search functionality", () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Search for "iphone" then verify relevant results are returned', async ({
    page,
  }) => {
    const searchPage = new Search(page);
    await homePage.searchInput.fill("iphone");
    await homePage.searchButton.click();

    await expect(searchPage.productItem.first()).toBeVisible();
    await expect(searchPage.productTitle.first()).toBeVisible();
    await searchPage.verifyAllProductTitleContains("iphone");
  });

  test("Search with gibberish word to verify search result not found", async ({
    page,
  }) => {
    const searchPage = new Search(page);
    await homePage.searchInput.fill("skaljdznc81937401rzx");
    await homePage.searchButton.click();

    await expect(searchPage.productItem.first()).not.toBeVisible();
    await expect(searchPage.productTitle.first()).not.toBeVisible();
  });
});
