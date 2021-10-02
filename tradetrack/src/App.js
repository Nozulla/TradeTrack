import { useEffect, useState } from 'react'
import Stylesheet from './components/stylesheet'

import Footer from "./components/Footer/Footer.js";

const stockpriceURL = 'https://yahoo-finance-api.vercel.app/Z';
async function getStocks() {
  const response = await fetch(stockpriceURL);
  return response.json();
}



function App() {
  const [price, setPrice] = useState(0);

    useEffect(() => {
      getStocks()
        .then((data) => {
          console.log(data);
          const theStock = data.chart.result[0];
          setPrice(theStock.meta.regularMarketPrice.toFixed(2));
        });        
    }, []);

    return(
      <div>
        <Stylesheet />  
        <h1>{price}</h1>
      
        <div>
          <Footer fluid />
        </div>
      </div>
    );
}

export default App