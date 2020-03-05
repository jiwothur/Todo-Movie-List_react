import React,{Component} from 'react';
import {HashRouter, Route} from "react-router-dom";
import TodoList from "./components/TodoList";
import MovieData from "./components/MovieData";
import Navigation from "./components/Navigation";


class App extends Component{

  render(){
    return (
    <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={TodoList}/>
    <Route path ="/movie" component={MovieData}/>
  </HashRouter>
    )
  }
}


export default App;
