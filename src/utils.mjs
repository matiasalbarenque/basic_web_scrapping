export const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const shuffleArray = (a) => a.sort(() => 0.5 - Math.random());

export const shuffleAndLimit = (urls, min, max) => {
  const urlsShuffled = shuffleArray(urls);
  return urlsShuffled.slice(0, getRandom(min, max));
};

export const userAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

export const categories = {
  mobo: {
    filename: 'mobo',
    categoryId: 1,
    url: 'https://www.pccomponentes.com/placas-base',
  },
  cpu: {
    filename: 'cpu',
    categoryId: 2,
    url: 'https://www.pccomponentes.com/procesadores',
  },
  ssd: {
    filename: 'ssd',
    categoryId: 3,
    url: 'https://www.pccomponentes.com/discos-duros',
  },
  gpu: {
    filename: 'gpu',
    categoryId: 4,
    url: 'https://www.pccomponentes.com/tarjetas-graficas',
  },
  ram: {
    filename: 'ram',
    categoryId: 5,
    url: 'https://www.pccomponentes.com/memorias-ram',
  },
  cooler: {
    filename: 'cooler',
    categoryId: 6,
    url: 'https://www.pccomponentes.com/ventiladores',
  },
  sound_card: {
    filename: 'sound_card',
    categoryId: 7,
    url: 'https://www.pccomponentes.com/tarjetas-sonido',
  },
  case: {
    filename: 'case',
    categoryId: 8,
    url: 'https://www.pccomponentes.com/torres',
  },
  psu: {
    filename: 'psu',
    categoryId: 9,
    url: 'https://www.pccomponentes.com/fuentes-alimentacion',
  },
  optical_drive: {
    filename: 'optical_drive',
    categoryId: 10,
    url: 'https://www.pccomponentes.com/grabadoras-dvd-blu-ray',
  },
  network_card: {
    filename: 'network_card',
    categoryId: 11,
    url: 'https://www.pccomponentes.com/tarjetas-de-red',
  },
  monitor: {
    filename: 'monitor',
    categoryId: 12,
    url: 'https://www.pccomponentes.com/monitores-pc',
  },
};
