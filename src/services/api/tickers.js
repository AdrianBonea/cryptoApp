import axios from 'axios';

const ALL_COINS_URL = 'https://min-api.cryptocompare.com/data/all/coinlist?summary=true';

const getAllCoinsList = async () => {
  try {
    const {
      data: { Data },
    } = await axios.get(ALL_COINS_URL);
    const coinsList = Object.keys(Data);
    if (coinsList.length > 0) return coinsList;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }

  return [];
};

const getPrices = async (url) => {
  try {
    const priceData = await axios.get(url);
    console.log(priceData.data.USD);
    const res = await priceData.data.USD;
    return res;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  return [];
};

export { getAllCoinsList, getPrices };
