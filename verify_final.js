import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2000 });
  try {
    await page.goto('http://localhost:5173');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: '/home/jules/verification/final_check.png', fullPage: true });

    // Also check shop page to see if NavLink works
    await page.click('text=Electronics');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/home/jules/verification/shop_check.png', fullPage: true });
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
