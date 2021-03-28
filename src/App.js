import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; 
import Explore from './pages/Explore';
import  { UserContext } from './context_api/user'
import { useContext } from 'react';


function App() {
  const [user , setUser] = useContext(UserContext)
  
  return (
    <div className="App">
        <Router>
        <Switch>       
          <Route path="/explore">
            {user.length != 0 ? <Explore/> : <Register/> }
          </Route>
          <Route path="/dashboard">
          {user.length != 0 ? <Dashboard/> : <Register/> }
          </Route>
          <Route path="/register">
          {user.length == 0 ? <Register/> : <Home/> }
          </Route>
          <Route path="/login">
          {user.length == 0 ? <Register/> : <Home/> }
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
  