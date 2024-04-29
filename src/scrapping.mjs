import { chromium } from 'playwright';
import { userAgent } from './utils.mjs';

export const getProductUrls = async (url) => {
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    userAgent,
  });
  const page = await context.newPage();
  await page.goto(url);
  const products = await page.$$eval('#category-list-product-grid > a', (a) => a.map((b) => b?.href));
  await browser.close();
  return products;
};

const openPage = async (ctx, url) => {
  const page = await ctx.newPage();
  await page.goto(url, {
    timeout: 60000,
  });
  const product = await page.$eval('main', (el) => {
    const title = el.querySelector('h1#pdp-title')?.innerText;
    const price = el.querySelector('.top-right #pdp-price-current-integer')?.innerText;
    const imageUrl = el.querySelector('#pdp-section-images ul > li img')?.src;
    const description = el.querySelector('#pdp-section-features > div:has(p)')?.innerHTML;

    return {
      title,
      price: Number(price.split(',')[0]) * 1500,
      imageUrl,
      description: description.replaceAll('\n', ''),
    };
  });
  return product;
};

export const getProductDetails = async (urls) => {
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    userAgent,
  });
  const data = await Promise.all(urls.map((a) => openPage(context, a)));
  await browser.close();
  return data;
};
