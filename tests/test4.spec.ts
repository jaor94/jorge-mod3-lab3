import { test, expect } from '@playwright/test';

test('test radiobutton', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    const SO1 = 'windows';
    const SO2 = 'macos';
    const SO3 = 'linux';
    const eleccion = SO3;
    await page.locator(`//input[@id='${eleccion}']`).check();
});