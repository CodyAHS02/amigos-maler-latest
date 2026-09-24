import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('http://localhost:3000/Plastering');
  
  // wait for render
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const elementColors = await page.evaluate(() => {
    const section = document.querySelector('.property-preservation-section');
    if (!section) return 'No section';
    
    function getInfo(el) {
       const style = window.getComputedStyle(el);
       const rect = el.getBoundingClientRect();
       return {
         tag: el.tagName,
         className: el.className,
         bg: style.background,
         bgColor: style.backgroundColor,
         width: rect.width,
         height: rect.height,
         left: rect.left,
         pseudoBefore: window.getComputedStyle(el, '::before').background,
         pseudoAfter: window.getComputedStyle(el, '::after').background,
         pseudoBeforeBgColor: window.getComputedStyle(el, '::before').backgroundColor,
         pseudoAfterBgColor: window.getComputedStyle(el, '::after').backgroundColor,
       };
    }
    
    const elements = [section, ...section.querySelectorAll('*')];
    return elements.map(getInfo).filter(info => {
      // return only elements that are visible and have some background or are important
      return true;
    });
  });
  
  console.log(JSON.stringify(elementColors, null, 2));
  await browser.close();
})();
