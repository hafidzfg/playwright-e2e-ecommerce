import { expect } from "@playwright/test";

export class Search {
  constructor(page) {
    this.page = page;
    this.productItem = page.locator("div div.product-thumb");
    this.productTitle = page.locator(".caption");
  }

  // Verify all returned product title contains inputted text
  async verifyAllProductTitleContains(text) {
    const count = await this.productTitle.count();
    for (let i = 0; i < count; i++) {
      await expect(this.productTitle.nth(i)).toContainText(text, {
        ignoreCase: true,
      });
    }
  }
}
