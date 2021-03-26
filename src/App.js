import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {UserProvider} from './context_api/user'
import { PlantProvider} from './context_api/plants'


function App() {
  return (
    <div className="App">
      <PlantProvider>
      <UserProvider>
        <Router>
        <Switch>
        <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Register/>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
       </UserProvider>
      </PlantProvider>
    </div>
  );
}

export default App;
  