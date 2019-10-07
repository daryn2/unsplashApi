import React, { Component } from 'react';
import * as constants from '../constants/request-constants'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Show extends Component {
    constructor() {
        super()
        this.state =  {
            data: {}    
        }
    }
    
    componentDidMount() {
        this.fetchData()
    }
    fetchData() {
        const {id} = this.props.match.params
        var url = constants.GET_BY_ID + id + "?client_id=" + constants.key
        fetch(url, {
            method: "GET",
        })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result
                })
            })
        
    }
    render() {
        let image = this.state.data
        console.log(image.urls);
        if (typeof(image.urls) != undefined)
        
        return (
            <div className="d-flex justify-content-center">
                <Link to="/">Back</Link>
                {
                    this.state && this.state.data.urls && 
                    <img src={ image.urls.regular }/>  
                }
                
            </div>
        )
    }
}
