import { useState } from 'react';

import Button from './DeleteBtn';
import { data } from '../../constant';

function Exchange() {
  const [cryptoData, setCryptoData] = useState(data);
  const [selectedCrypto, setSelectedCrypto] = useState();

  const handleSelect = (e) => {
    setSelectedCrypto(e.currentTarget.id); // set the selected crypto in order to be highlighted
  };

  const handleDelete = () => {
    const filteredData = cryptoData.filter((crypto) => crypto.id !== selectedCrypto);
    setCryptoData(filteredData); // delete the selected crypto after it is selected
  };

  return (
    <section>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {cryptoData.map((item) => (
          <div
            role="textbox"
            tabIndex={0}
            key={item.id + item.name}
            id={item.id}
            className={`bg-white overflow-hidden shadow rounded-lg  ${
              selectedCrypto === item.id ? 'border-4 border-purple-800' : ''
            } cursor-pointer`}
            onClick={handleSelect}
          >
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {`${item.firstCurrency}-USD`}
              </dt>
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

export default Exchange;

Exchange.defaultProps = {
  type: 'delete',
};
