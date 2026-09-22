const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/partners', { waitUntil: 'networkidle0' });

  const footerStyles = await page.evaluate(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return null;
    const styles = window.getComputedStyle(footer);
    const rect = footer.getBoundingClientRect();
    return {
      rect: { width: rect.width, height: rect.height, top: rect.top, bottom: rect.bottom },
      background: styles.backgroundColor,
      color: styles.color,
      visibility: styles.visibility,
      display: styles.display,
      zIndex: styles.zIndex
    };
  });

  console.log(JSON.stringify(footerStyles, null, 2));
  await browser.close();
})();
