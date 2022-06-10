import { useEffect, useState } from 'react';
import axios from 'axios';

import { Chart, Exchange, Loading, Ticker } from '../components';
import { data } from '../constant';

function Home() {
  const [tickers, setTickers] = useState(data);
  const [prices, setPrices] = useState(0);
  const GET_PRICE_URL = `https://min-api.cryptocompare.com/data/price?fsym=${
    tickers[tickers.length - 1].name
  }&tsyms=USD`;

  // useEffect(() => {
  //   fetch(GET_PRICE_URL)
  //     .then((response) => response.json())
  //     .then((priceData) => setPrices(priceData))
  //     // eslint-disable-next-line no-console
  //     .catch((error) => console.log(error));
  // }, [GET_PRICE_URL]);

  const getPrices = async () => {
    try {
      const coinPrice = await axios.get(GET_PRICE_URL);

      console.log(coinPrice.data.USD);

      if (coinPrice.data.length > 0) return coinPrice.data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }

    return [];
  };

  useEffect(() => {
    setPrices(getPrices());
  }, [GET_PRICE_URL]);

  const handleAddTicker = (ticker) => {
    const newTicker = {
      id: `${tickers.length + 1}`,
      name: ticker,
      price: prices.USD,
    };
    setTickers([...tickers, newTicker]); // add the ticker to the list
  };

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <Loading />
        <div className="container">
          <Ticker onAddTicker={handleAddTicker} />
          <hr className="w-full border-t border-gray-600 my-4" />
          <Exchange tickerData={tickers} updateTickerData={setTickers} />
          <hr className="w-full border-t border-gray-600 my-4" />
          <Chart />
        </div>
      </div>
    </section>
  );
}

export default Home;
