import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Form } from "../components/Form";
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
    
                <Route path="/vivair" component={Form}/>
                <Route path="/avianca" component={Form}/>
        </Switch>
      </div>
    </Router>
    )
}
