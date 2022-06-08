import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './DeleteBtn';

function Exchange({ tickerData, updateTickerData }) {
  const [selectedCrypto, setSelectedCrypto] = useState();

  const handleSelect = (e) => {
    setSelectedCrypto(e.currentTarget.id); // set the selected crypto in order to be highlighted
  };

  const handleDelete = () => {
    const filteredData = tickerData.filter((item) => item.id !== selectedCrypto); // filter the data to remove the selected crypto
    updateTickerData(filteredData);
  };

  return (
    <section>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {tickerData.map((item) => (
          <div
            role="textbox"
            tabIndex={0}
            key={item.name}
            id={item.id}
            className={`bg-white overflow-hidden shadow rounded-lg  ${
              selectedCrypto === item.id ? 'border-4 border-purple-800' : ''
            } cursor-pointer`}
            onClick={handleSelect}
          >
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">{`${item.name}-USD`}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.change}</dd>
            </div>
            <div className="w-full border-t border-gray-200" />
            <Button type="delete" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        ))}
      </dl>
    </section>
  );
}

Exchange.propTypes = {
  tickerData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      change: PropTypes.arrayOf(PropTypes.number),
    })
  ),
  updateTickerData: PropTypes.func,
};

Exchange.defaultProps = {
  tickerData: [
    {
      id: '1',
      name: 'Bitcoin',
      change: [0.0],
    },
  ],
  updateTickerData: () => {},
};

export default Exchange;
