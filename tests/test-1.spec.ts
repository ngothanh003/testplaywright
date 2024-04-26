import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
await page.goto('https://metruyencv.com/');
await page.getByPlaceholder('Tìm kiếm').click();
await page.getByPlaceholder('Tìm kiếm').fill('de ba');
await page.getByPlaceholder('Tìm kiếm').press('Enter');
await page.getByRole('link', { name: 'Đế Bá' }).click();
await page.getByRole('link', { name: ' Đọc truyện' }).click();
await page.locator('#js-menu-actions > li:nth-child(2) > a').click();
await page.locator('#js-font-picker').selectOption('\'Patrick Hand\'');
await page.getByRole('button', { name: '' }).click();
await page.locator('#js-read__body').getByText('Chương sau').click();
await expect(page.locator('#js-read__body')).toContainText('2014-09-21 17:09:34');

});