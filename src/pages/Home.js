import { useState } from 'react';

import { Chart, Exchange, Loading, Ticker } from '../components';
import { data } from '../constant';

function Home() {
  const [tickers, setTickers] = useState(data);

  const handleAddTicker = (ticker) => {
    const newTicker = {
      id: `${tickers.length}`,
      name: ticker,
      change: [0.0],
    };

    setTickers([...tickers, newTicker]);
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
