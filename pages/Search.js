export class Search {
  constructor(page) {
    this.page = page;
    this.productItem = page.locator("div.product-item");
  }
}
