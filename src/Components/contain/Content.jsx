import "./content.css";
import fl from "./../../store/fl.png"; 
import { useNavigate } from "react-router-dom";

function Content() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="main-left">
        <p>Smell is a</p>
        <p>word, <span>PERFUME</span></p>
        <p>is literature</p>

        <div className="little">
          Her dress was canvas, her perfume was the ink
          in which she wrote her story.
        </div>

        <div className="butthold">

     
          <button className="but" onClick={() => navigate('/unique')}>
            <i className="fa-solid fa-cart-shopping" style={{ color: 'black' ,marginRight:4}} ></i> BUY NOW
          </button>
         



          <button className="but" onClick={() => navigate('/unique')}  >
            <i className="fa-regular fa-heart" style={{ color: 'black' ,marginRight:4}}></i> ADD TO CART
          </button>
        
          
        </div>
      </div>

      <div className="main-right">
        <img src={fl} alt="flower" />
        <p>Price: $23 </p>
      </div>
    </div>
  );
}

export default Content;
