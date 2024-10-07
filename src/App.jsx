import './App.css';
import Nav from "./Components/nav/Nav.jsx";
import Content from "./Components/contain/Content.jsx";
import Products from './Components/bottom/Products.jsx';
import Approutes from "./Components/Routes.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className='main'>
   
      {location.pathname !== "/unique" && (
        <>
          <Nav />
          <Content />
          <Products />
        </>
      )}

      <Approutes />
    </div>
  );
}

export default App;
