import { readFileSync, writeFileSync } from 'fs';
import { categories, getRandom } from './src/utils.mjs';

const products = {
  products: [],
};

const discounts = [0, 0, 0, 0, 0, 0, 5, 10, 15, 20, 25];

Object.values(categories).forEach((category) => {
  const jsonData = readFileSync(`./scrapped-data/${category.categoryId}_${category.filename}.json`, {
    encoding: 'utf8',
  });
  const productsWithDiscount = JSON.parse(jsonData).map((a) => ({
    ...a,
    discount: discounts[getRandom(0, discounts.length - 1)],
  }));
  products.products.push(...productsWithDiscount);
});

writeFileSync('./scrapped-data/products.json', JSON.stringify(products));
