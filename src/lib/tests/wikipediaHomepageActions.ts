import { Page, expect, test } from '@playwright/test';

// reuse your login.json so you stay signed‑in
test.use({ storageState: 'src/auth/login.json' });

/**
 * 1. Navigate to Wikipedia's homepage
 * 2. Assert there are less than 7,000,000 articles in English
 * 3. Under Appearance menu, switch to Small → assert text SIZE is Small
 * 4. Switch to Large → assert text SIZE is Large
 * 5. Switch back to Standard → assert SIZE is Standard
 */

export async function run(page: Page, params: {}) {
  // 1
  await page.goto('https://en.wikipedia.org/wiki/Main_Page');

  // 2.
  const countLink = page.getByRole('link', { name: /^\d{1,3}(,\d{3})*$/ });
  const raw = await countLink.innerText();

  // 3–5. open the Appearance dropdown


  // Small


  // Large


  // Standard

}

test('Perform Wikipedia homepage actions and validate counts & text‑size', async ({ page }) => {
  await run(page, {}); 
});
