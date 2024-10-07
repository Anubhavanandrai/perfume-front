import { Route, Routes } from 'react-router-dom';
import Uniq from "./uni/Uniq.jsx";

const Approutes = () => {
  return (
    <Routes>
     
      <Route path="/unique" element={<Uniq />} />
    
      
    </Routes>
  );
};

export default Approutes;
