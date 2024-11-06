import "Components/CryptoCard/CryptoCard.css";

const CryptoCard = ({image, name, price}) => {
    return ( 
        <div className="card">
            <div className="card_image">
                <img src={image} alt={name}/>

            </div>
            <div className="card_info">
                <h3>{name}</h3>
                <h4>${price.toLocaleString()}</h4>
            </div>
        </div>
     );
}
 
export default CryptoCard;