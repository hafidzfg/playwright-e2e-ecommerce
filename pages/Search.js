import { expect } from "@playwright/test";

export class Search {
  constructor(page) {
    this.page = page;
    this.productItem = page.locator("div div.product-thumb");
    this.productTitle = page.locator(".caption");
  }
  async verifyAllProductTitleContains(text) {
    const count = await this.productTitle.count();
    for (let i = 0; i < count; i++) {
      await expect(this.productTitle.nth(i)).toContainText(text, {
        ignoreCase: true,
      });
    }
  }
}
