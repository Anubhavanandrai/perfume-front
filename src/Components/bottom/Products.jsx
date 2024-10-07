import "./Products.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    try {
      const val = await axios.get("https://fakestoreapi.com/products");
      const filter= val.data.slice(4,8);
      setProduct(filter);
    } catch (err) {
      console.error("Fetching data disrupted", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product">
      <div className="heading">
        <h3>Products</h3>
        <p>Popular Products</p>
      </div>

      <div className="productcard">
        {product.map((item) => (
          <div className="card" key={item.id}>
                 <div className="imgstore"> 
                 <img src={item.image} alt={item.title} />  
                 </div>
                  <h4>{item.title}</h4>
                  <p>Price: {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
