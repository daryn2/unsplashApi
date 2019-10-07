import React, { Component } from 'react'
import Images from './Images'
import Search from './Search'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Show from './components/Show';


class App extends Component {
   constructor(props) {
        super(props)
    
   }
    render() {
        
        return (
            <Router>
                
                <Route exact path="/" component = { Images }/>
                <Route path="/show/:id" component = { Show }/>
            </Router>
        )
    }
}

export default App