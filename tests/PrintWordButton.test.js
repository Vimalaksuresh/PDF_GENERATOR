const { test, expect } = require('@playwright/test');

test('Print Word button generates a Word document', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Ensure this matches your local development URL

  // Click the Print Word button
  await page.click('button.print-word-button');

  // Add assertions or further actions as needed
});
