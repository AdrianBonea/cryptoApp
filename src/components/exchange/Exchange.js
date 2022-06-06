import { useState } from "react";

import DeleteBtn from "./DeleteBtn";
import { data } from "../../constant";

const Exchange = () => {
  const [cryptoData, setCryptoData] = useState(data);
  const [selectedCrypto, setSelectedCrypto] = useState();

  const handleSelect = (e) => {
    setSelectedCrypto(e.currentTarget.id); // set the selected crypto in order to be highlighted
  };

  const handleDelete = () => {
    setCryptoData(cryptoData.filter((crypto) => crypto.id !== selectedCrypto)); // delete the selected crypto after it is selected
  };

  return (
    <section>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id + crypto.name}
            id={crypto.id}
            className={`bg-white overflow-hidden shadow rounded-lg  ${
              selectedCrypto === crypto.id ? "border-4 border-purple-800" : ""
            } cursor-pointer`}
            onClick={handleSelect}
          >
            <div className="px-4 py-5 sm:p-6 text-center">
              <dt className="text-sm font-medium text-gray-500 truncate">
                {crypto.firstCurrency + "-" + crypto.secondCurrency}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {crypto.change}
              </dd>
            </div>
            <div className="w-full border-t border-gray-200"></div>
            <DeleteBtn handleDelete={handleDelete} />
          </div>
        ))}
      </dl>
    </section>
  );
};

export default Exchange;
