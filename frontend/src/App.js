import React from "react";
import { Route, BrowserRouter, Routes} from 'react-router-dom';
 
import Leaderboard from "./Pages/Leaderboard";
import Rules from "./Pages/Rules";
import Submit from "./Pages/Submit";
import Home from "./Pages/Home";
 
function App(){
   return(
       <BrowserRouter>
           <div>
               <h1> Testing routes </h1>
           </div>
           <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="leaderboard" element ={<Leaderboard/>} />
             <Route path="rules" element={<Rules/>} />
             <Route path="submit" element={<Submit/>} />
           </Routes>
       </BrowserRouter>
 
   );
}
 
export default App;
