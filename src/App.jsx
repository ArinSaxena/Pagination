import "./App.css";
import { useEffect, useState } from "react";
import CryptoList from "Components/CryptoList/CryptoList.jsx";
import Pagination from "Components/Pagination/Pagination.jsx";
function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(currentItems);

  return (
    <div className="'app">
      <CryptoList items={currentItems} itemsPerPage={10} />
      <Pagination
        totalPages={totalPages}
        totalItems={items.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
