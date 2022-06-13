import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Input from '../input/Input';
import { getAllCoinsList, getPrices } from '../../services/api/tickers';

function Ticker({ onAddTicker, setPrices, url }) {
  const [ticker, setTicker] = useState('');
  const [allCoinsList, setAllCoinsList] = useState([]);
  const [autoCompleteItems, setAutoCompleteItems] = useState([]);

  const [errorStatus] = useState(false);

  useEffect(() => {
    getAllCoinsList().then((coins) => {
      setAllCoinsList(coins);
    });
  }, []);

  useEffect(() => {
    if (ticker.length > 0) {
      const filteredCoins = allCoinsList
        .filter((coin) => coin.toLowerCase().startsWith(ticker.toLowerCase()))
        .slice(0, 4);

      setAutoCompleteItems(filteredCoins);
    } else {
      setAutoCompleteItems([]);
    }
  }, [ticker, allCoinsList]);

  const handleTickerChange = (e) => {
    setTicker(e); // set the ticker value
  };

  const handleAddTicker = () => {
    if (ticker.length === 0) return; // if the ticker is empty, then do nothing

    onAddTicker(ticker); // add the ticker to the list
    setTicker(''); // clear the ticker input

    getPrices(url).then((price) => {
      setPrices(price); // set the prices when the ticker is added
    });
  };

  return (
    <section>
      <form>
        <div className="flex">
          <div className="max-w-xs">
            <h2 htmlFor="wallet" className="block text-sm font-medium text-gray-700">
              Ticker
            </h2>
            <Input name="ticker" value={ticker} onChange={handleTickerChange} />
            {!!autoCompleteItems.length && (
              <div className="flex bg-white shadow-md p-1 rounded-md flex-wrap">
                {autoCompleteItems.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
            <div className="text-sm text-red-600">
              {errorStatus && 'Such a Ticker has already been added'}
            </div>
          </div>
        </div>
        <button
          onClick={handleAddTicker}
          type="button"
          className="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="-ml-0.5 mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          Add
        </button>
      </form>
    </section>
  );
}

Ticker.propTypes = {
  onAddTicker: PropTypes.func,
  setPrices: PropTypes.func,
  url: PropTypes.string,
};

Ticker.defaultProps = {
  onAddTicker: () => {},
  setPrices: () => {},
  url: '',
};

export default Ticker;
