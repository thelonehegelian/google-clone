import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            {/* Home */}
            <Home />
          </Route>
          {/* Search Page (results) */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
