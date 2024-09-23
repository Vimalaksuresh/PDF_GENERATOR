const { test, expect } = require('@playwright/test');

test('Print PDF button generates a PDF', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Ensure this matches your local development URL

  // Click the Print PDF button
  await page.click('button.print-pdf-button');

  // Add assertions or further actions as needed
});
