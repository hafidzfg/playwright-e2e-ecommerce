export class Search {
  constructor(page) {
    this.page = page;
    this.productItem = page.locator("div.product-item");
    this.productText = page.locator("h2.product-title a");
  }
  async verifyAllProductTitleContains(text) {
    const count = await this.productText.count();
    for (i = 0; i < count; i++) {
      await expect(searchPage.productText.nth(i)).toContainText(text, {
        ignoreCase: true,
      });
    }
  }
}
