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
    // 1
    await page.goto('https://www.wikipedia.org/');

    // 2
    const searchInput = page.getByRole('searchbox', {
        name: 'Search Wikipedia',
    });
    await searchInput.fill('artificial');

    // 3
    const artificialIntelligenceLink = page
        .getByRole('link')
        .filter({ hasText: 'Artificial intelligence' })
        .first();
    await artificialIntelligenceLink.click();

    // 4.

    const header = page
        .getByRole('heading')
        .getByText('Artificial intelligence')
        .first();

    await expect(header).toBeVisible();

    const viewHistoryButton = page.getByTitle(
        'Past revisions of this page [alt-shift-h]',
    );
    await viewHistoryButton.click();

    // 5.

    const lastUpdate = page.locator('[class*="contributions-list"] li').first();
    await expect(
        lastUpdate.getByTitle('User:ElegantEgotist (page does not exist)'),
    ).toBeVisible();
}
