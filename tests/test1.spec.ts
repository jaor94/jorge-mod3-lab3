import { test, expect } from '@playwright/test';

test('test input', async ({ page }) => {
    const texto = 'Jorge Orellana';
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.locator("//input[@id='developer-name']").click();
    await page.locator("//input[@id='developer-name']").fill(texto);
});