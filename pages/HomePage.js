export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('input[id="small-searchterms"]');
    this.searchButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto("https://demo.nopcommerce.com/");
  }
}
