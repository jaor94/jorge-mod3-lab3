import { test, expect } from '@playwright/test';

test('test checkboxes', async ({ page }) => {
    await page.goto('https://devexpress.github.io/testcafe/example/');
    const opc1='remote-testing';
    const opc2='reusing-js-code';
    const opc3='background-parallel-testing';
    const opc4='continuous-integration-embedding';
    const opc5='traffic-markup-analysis';
    const listaOpciones=[opc1, opc3, opc4, opc2, opc5];
    for(let n of listaOpciones){
        await page.locator(`//input[@id='${n}']`).check();
    }
});