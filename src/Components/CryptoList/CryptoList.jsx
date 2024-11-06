import CryptoCard from "Components/CryptoCard/CryptoCard.jsx";
import "Components/CryptoList/CryptoList.css";

const CryptoList = ({ items }) => {
  return (
    <div className="container">
    <div className="crypto_list">
      {items.map((items, index) => {
        return (
          <CryptoCard
            key={index}
            image={items.image}
            name={items.name}
            price={items.current_price}
          />
        );
      })}
    </div>
    </div>
  );
};

export default CryptoList;
