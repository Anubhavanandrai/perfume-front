import "./nav.css"
import st from "./../../store/st.webp"
function Nav() {
  return (
    <div className="navigation">

      <div className="logo">
      <div className="logi"><img src={st} alt="img" ></img></div>
      <p>Perfumes</p>
      </div>
        
        <div className="nav-content">
            <p>Home</p>
             <p>Products</p>
             <p>Contact</p>
             <p>About</p>
             <p className="icon"><i className="fa-solid fa-cart-shopping" style={{ color: 'white' }} ></i></p> 
            <p className="icon"> <i className="fa-regular fa-heart" style={{ color: 'white' }}></i></p>
        </div>
        
    </div>
  )
}

export default Nav





