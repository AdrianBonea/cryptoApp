import { Chart, Exchange, Loading, AddTicker } from '../components';

function Main() {
  // const coinElements = coinData.map((coin) => (
  //   <AddTicker key={coin.id} {...coin} />
  // ));

  return (
    <section>
      <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
        <Loading />
        <div className="container">
          <AddTicker />
          <hr className="w-full border-t border-gray-600 my-4" />
          <Exchange />
          <hr className="w-full border-t border-gray-600 my-4" />
          <Chart />
        </div>
      </div>
    </section>
  );
}

export default Main;
