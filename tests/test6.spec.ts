import { test, expect } from '@playwright/test';

test('test slider', async ({ page }) => {
  await page.goto('https://devexpress.github.io/testcafe/example/');
  await page.locator("//input[@id='tried-test-cafe']").check();
  
  const posicion = 8;
  const botonSlider = page.locator("//span");
  const slider = page.locator("//div[@id='slider']");
  const limitesBoton = await botonSlider.boundingBox();
  const limitesSlider = await slider.boundingBox();
    
  await page.mouse.move(limitesBoton.x + limitesBoton.width / 2, limitesBoton.y + limitesBoton.height / 2);
  await page.mouse.down();
  await page.mouse.move(limitesBoton.x + (limitesSlider.width *11.11*(posicion-1))/100, limitesBoton.y + limitesBoton.height / 2);
  await page.mouse.up();
});