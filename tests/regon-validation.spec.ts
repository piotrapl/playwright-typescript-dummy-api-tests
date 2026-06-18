import { expect, test } from '@playwright/test';

test('displays an error for an invalid nine-digit REGON', async ({ page }) => {
  await page.goto('');

  const regonInput = page.getByRole('textbox', { name: 'REGON', exact: true });
  await regonInput.fill('123456789');

  await page.getByRole('button', { name: 'Szukaj', exact: true }).first().click();

  await expect(
    page.getByText('Wprowadzony numer REGON jest nieprawidłowy.', {
      exact: false,
    }),
  ).toBeVisible();
});
