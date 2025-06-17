export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: "search" });
    this.searchButton = page.getByRole("button", { name: "search" });
  }

  async goto() {
    await this.page.goto("https://ecommerce-playground.lambdatest.io/");
  }
}
