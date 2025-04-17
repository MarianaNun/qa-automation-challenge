import { Page, expect } from '@playwright/test';

// make sure this file runs with your logged‑in state

/**
 * 1. Go to wikipedia.org
 * 2. Search “artificial”
 * 3. Click “Artificial intelligence”
 * 4. Click “View history”
 * 5. Assert the most recent edit was made by *username*
 */

export async function run(page: Page, params: {}) {

    const searchInput = page.getByRole('searchbox', { name: 'Search Wikipedia' });

    // 1
    await page.goto('https://www.wikipedia.org/');

    // 2
    await searchInput.fill('artificial');
        
    // 3
    const artificialIntelligenceLink = page.getByRole('link', {
        name: 'Artificial intelligence',
    });
    await artificialIntelligenceLink.click();;

    // 4. 

    // 5.

}
