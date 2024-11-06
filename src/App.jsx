import "./App.css";
import { useEffect, useState } from "react";
import CryptoList from "Components/CryptoList/CryptoList.jsx";
import Pagination from "Components/Pagination/Pagination.jsx";
function App() {
  // const items = ['item 1', 'item 2','item 3','item 4','item 5', 'item 6','item 7', 'item 8','item 9', 'item 10','item 11', 'item 12','item 13'];
  const [items, setItems] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [itemsPerPage,setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      setItems(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);


  return (
    // <div>
    //   <Pagination items={items} itemsPerPage={2}/>

    // </div>
    <div className="'app">
      {/* <h1>Crypto Gallery</h1> */}
      <CryptoList items={currentItems} itemsPerPage={10} />
      <Pagination totalItems={items.length} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
