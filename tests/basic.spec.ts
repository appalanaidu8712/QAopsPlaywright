import { test, expect } from '@playwright/test';

test('open new tab', async ({ browser }) => {
  const context = await browser.newContext();

  // First tab
  const page = await context.newPage();
  await page.pause();
  await page.goto('https://www.google.com');

  // Open a new tab in the same browser window/context
  const newTab = await context.newPage();
  await newTab.goto('https://www.example.com');
  await page.pause();
  // Work with both tabs
  console.log(await page.title());
  console.log(await newTab.title());
});
