import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Leaderboard from './components/Leaderboard/Leaderboard';
import Rules from './components/Rules/Rules';
import Submit from './components/Submit/Submit';
 
function App() {
 return (
   <div className="App">
     <BrowserRouter>
       <Switch>
         <Route path="/leaderboard">
           <Leaderboard />
         </Route>
         <Route path="/rules">
           <Rules />
         </Route>
         <Route path="/submit">
           <Submit />
         </Route>
       </Switch>
     </BrowserRouter>
   </div>
 );
}
 
export default App;
