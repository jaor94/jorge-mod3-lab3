import { test, expect } from '@playwright/test';

test('test boton input', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    const texto = 'Jorge Orellana';
    await page.locator("//input[@id='developer-name']").click();
    await page.locator("//input[@id='developer-name']").fill(texto);
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.locator("//input[@id='populate']").click();
});