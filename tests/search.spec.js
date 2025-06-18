import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { Search } from "../pages/Search";

test.describe("Search functionality", () => {
  let homePage;
  let searchPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchPage = new Search(page);
    await test.step("Open homepage", async () => {
      await homePage.goto();
    });
  });

  test('Search for "iphone" then verify relevant results are returned', async () => {
    await test.step('Search for "iphone"', async () => {
      await homePage.searchInput.fill("iphone");
      await homePage.searchButton.click();
    });

    await test.step("Verify search results", async () => {
      await expect(searchPage.productItem.first()).toBeVisible();
      await expect(searchPage.productTitle.first()).toBeVisible();
      await searchPage.verifyAllProductTitleContains("iphone");
    });
  });

  test("Search with gibberish word to verify search result not found", async () => {
    await test.step("Search for gibberish word", async () => {
      await homePage.searchInput.fill("ajsd98u19ujfd0jz0czxc");
      await homePage.searchButton.click();
    });

    await test.step("Verify search results", async () => {
      await expect(searchPage.productItem.first()).not.toBeVisible();
      await expect(searchPage.productTitle.first()).not.toBeVisible();
      await expect(searchPage.noResultMessage).toBeVisible();
    });
  });
});
