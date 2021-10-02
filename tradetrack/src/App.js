import { useEffect, useState } from 'react'
import Stylesheet from './components/stylesheet'

import Footer from "./components/Footer/Footer.js";
import DataGrid from 'react-data-grid';

const stockpriceURL = 'https://yahoo-finance-api.vercel.app/Z';
async function getStocks() {
  const response = await fetch(stockpriceURL);
  return response.json();
}


const columns = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' }
];

const rows = [
  { id: 0, title: 'Example' },
  { id: 1, title: 'Demo' }
];

function GridThing() {
  return <DataGrid columns={columns} rows={rows} />;
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
        <GridThing />
        <div>
          <Footer fluid />
        </div>
      </div>
    );
}

export default App