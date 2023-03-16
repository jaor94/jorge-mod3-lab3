import { test, expect } from '@playwright/test';

test('test combobox', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    const opcion1="Command Line";
    const opcion2="JavaScript API";
    const opcion3="Both";
    const eleccion = opcion2;
    await page.locator("//select[@id='preferred-interface']").selectOption(eleccion);
});