import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={route.component}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;
