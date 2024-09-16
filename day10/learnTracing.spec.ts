

import { test, chromium, expect } from '@playwright/test';

test('test', async () => {

    const browser = await chromium.launch({
        headless: false
    })

    const context = await browser.newContext({
        recordVideo: {
            dir: "./recordedVideo",
            size: {
                width: 300,
                height: 500
            }

        }
    })
    await context.tracing.start({ screenshots: true })
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/');
    const deal = page.getByRole('link', { name: 'Today\'s Deals' });
    await deal.screenshot({ path: "./screenshots/ele.png" })
    await deal.click();
    await page.getByRole('link', { name: 'POCO Onam Shopping store' }).click();
    await expect(page.getByLabel('Onam Shopping Store')).toBeVisible();
    await page.screenshot({ path: "./screenshots/page.png" })
    await context.tracing.stop({ path: "tracing.zip" })
});