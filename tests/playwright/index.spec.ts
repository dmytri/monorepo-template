import { test, expect } from '@playwright/test';

var appUrl = `http://${process.env.PLAYWRIGHT_APP}/`;

test('meta is correct', async ({ page }) => {
  await page.goto(appUrl);
  await expect(page).toHaveTitle('Welcome to epam.');
});

test('welcome is correct', async ({ page }) => {
  await page.goto(appUrl);
  await expect(page.getByText('Welcome to epam.', { exact: true })).toBeVisible();
});
