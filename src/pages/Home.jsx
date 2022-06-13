import { useState } from 'react';

import { Chart, Exchange, Loading, Ticker } from '../components';

function Home() {
  const [prices, setPrices] = useState(0);
  const [tickers, setTickers] = useState([]);
  const GET_PRICE_URL = `https://min-api.cryptocompare.com/data/price?fsym=${
    tickers.length > 0 ? tickers[tickers.length - 1].name : ''
  }&tsyms=USD`;

  const handleAddTicker = (ticker) => {
    const newTicker = {
      id: `${tickers.length}`,
      name: ticker,
      price: prices,
    };
    setTickers([...tickers, newTicker]);
    // add the ticker to the list
  };

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <Loading />
        <div className="container">
          <Ticker onAddTicker={handleAddTicker} setPrices={setPrices} url={GET_PRICE_URL} />
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
