# Playwright E2E Testing – Ecommerce Demo

This project contains end-to-end UI tests using [Playwright](https://playwright.dev/) in JavaScript. It's built to demonstrate automation testing best practices, including Page Object Model (POM), CI integration with GitHub Actions, and linting setup with ESLint.

---

## 🧰 Tech Stack

- [Playwright](https://playwright.dev/) for browser automation
- JavaScript (ESModules)
- ESLint (Flat Config)
- GitHub Actions for CI

---

## ✅ Test Scenarios

### Implemented

- Search for a valid product (e.g. `iphone`) and verify results are returned.
- Search using gibberish/random keyword and verify "no product found" message is shown.

more exploration/learning coming

---

## 📁 Project Structure

```
.
├── .github/workflows/         # GitHub Actions CI workflows
│   └── playwright.yml
├── pages/                     # Page Object Model files
│   ├── HomePage.js
│   └── Search.js
├── tests/                     # Actual test specs
│   └── search.spec.js
├── eslint.config.js           # ESLint Flat Config
├── playwright.config.js       # Playwright configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run tests (headed mode)

```bash
npx playwright test
```

### 3. Run tests (headless mode – recommended for CI)

```bash
npx playwright test --headless
```

### 4. Show HTML test report

```bash
npx playwright show-report
```

---

## 🔍 Linting Setup

This project uses ESLint with the new [Flat Config](https://eslint.org/docs/latest/use/configure/flat-config).

### Run lint manually

```bash
npm run lint
```

### Auto-fix issues

```bash
npm run lint:fix
```

### Files ignored from linting

Lint ignores are configured via the `ignores` field inside `eslint.config.js` (Flat Config doesn't support `.eslintignore` anymore).

---

## 🤖 GitHub Actions CI

CI is set up using GitHub Actions to run both lint and test steps on each push to `main`.

Located at:  
`.github/workflows/playwright.yml`

CI Steps:

- Install dependencies
- Run ESLint
- Run Playwright tests in headless mode

---

## 📌 Notes

- ## This repo is purely for practice/learning purposes.
