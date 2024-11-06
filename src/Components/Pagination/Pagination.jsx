import { useState } from "react";
import "Components/Pagination/Pagination.css";

const Pagination = ({ totalItems, itemsPerPage, setCurrentPage }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//   console.log(currentItems);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination">
      {/* <ul>
        {currentItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul> */}
      {pageNumber.map((number,index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(number)}>{number}</button>
        );
      })}
    </div>
  );
};

export default Pagination;
