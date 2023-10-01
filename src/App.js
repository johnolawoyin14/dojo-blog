// import logo from './logo.svg';
import Navbar from "./navbar";
import Home from "./Home";
import "./index.css";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Create from "./create";
import Blogdetails from "./Blogdetails";
import NotFound from "./notFound";



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/create">
         
              <Create/>

          </Route>
          <Route exact path="/blogs/:id">
         
              <Blogdetails/>

          </Route>
          <Route path="*">
           
            <NotFound/>
          
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
