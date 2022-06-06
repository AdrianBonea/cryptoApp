import Loading from "./components/Loading";
import AddTicker from "./components/AddTicker";
import Exchange from "./components/Exchange";
import Chart from "./components/Chart";

import coinData from "./mockData/Data";

function App() {
  // const coinElements = coinData.map((coin) => (
  //   <AddTicker key={coin.id} {...coin} />
  // ));

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <Loading />
        <div className="container">
          <AddTicker {...coinData} key={coinData.id} />
          <hr className="w-full border-t border-gray-600 my-4" />
          <Exchange />
          <hr className="w-full border-t border-gray-600 my-4" />
          <Chart />
        </div>
      </div>
    </section>
  );
}

export default App;
