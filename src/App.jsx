import React from 'react';
import { Home /* Auth */ } from './pages';

function App() {
  // const coinElements = coinData.map((coin) => (
  //   <AddTicker key={coin.id} {...coin} />
  // ));

  return (
    <React.StrictMode>
      {/* <Auth /> */}
      <Home />
    </React.StrictMode>
  );
}

export default App;
