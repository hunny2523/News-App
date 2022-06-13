import React, { Component } from 'react';
import NavBar from './Components/Navbar';
import News from './Components/NewsComponent';
import './App.css';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <LoadingBar height={5} color="#f11946" progress={this.state.progress}  />
          <div className='row mx-0'>
            <div className="col-lg-2 col-md-3 bg-dark">
              <NavBar />
            </div>
            <div className="col-md-9 col-12 container ">
        <Router>
              <Switch>
                <Route exact path="/" ><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="general" /></Route>
                <Route exact path="/entertainment" ><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="entertainment" /></Route>
                <Route exact path="/science" ><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="science" /></Route>
                <Route exact path="/health" ><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="health" /></Route>
                <Route exact path="/sports" ><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="sports" /></Route>
                <Route exact path="/business" ><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="business" /></Route>
                <Route exact path="/technology" ><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={5} country="in" category="technology" /></Route>
              </Switch>
        </Router>
            </div>
          </div>
      </div>
    );
  }
}
