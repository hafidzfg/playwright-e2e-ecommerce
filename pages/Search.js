export class Search {
  constructor(page) {
    this.page = page;
    this.productItem = page.locator("div.product-item");
    this.productText = page.locator("h2.product-title a");
  }
}
