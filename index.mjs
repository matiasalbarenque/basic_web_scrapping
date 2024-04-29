import { v4 as uuidv4 } from 'uuid';
import { writeFileSync } from 'fs';
import { categories, getRandom, shuffleAndLimit } from './src/utils.mjs';
import { getProductUrls, getProductDetails } from './src/scrapping.mjs';

const category = categories.mobo; // <= Change pc component manually

const urls = await getProductUrls(category.url);
const urlsLimited = shuffleAndLimit(urls, 15, 20);
const productDetails = await getProductDetails(urlsLimited);

const productDetailsParsed = productDetails.map((a) => ({
  ...a,
  categoryId: category.categoryId,
  id: uuidv4(),
  stock: getRandom(0, 70),
  userSellerId: getRandom(1, 4),
}));

writeFileSync(`./scrapped-data/${category.categoryId}_${category.filename}.json`, JSON.stringify(productDetailsParsed));
