import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

/*
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://fcyt.umss.edu.bo/');
  await page.goto('http://fcyt.umss.edu.bo/pregrado/index.php');
  await page.getByRole('link', { name: 'Ingeniería en Informática' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'http://www.cs.umss.edu.bo' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Plantel Docente' }).click();
  await page1.getByRole('link', { name: 'Msc. Ing. Orellana Araoz Jorge Walter' }).click();
  await page1.getByRole('link', { name: 'Redes de Computadoras' }).click();
  await page1.waitForTimeout(3000);
});
*/