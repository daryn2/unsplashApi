import React, { Component } from 'react'
import Search from './Search'
import Pagination from './Pagination'
import * as constants from '../constants/request-constants'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


var url = constants.GET_REQUEST + "&page=" + 1

class Images extends Component {
  constructor() {
      super()
      this.state = {
          current_page : 1,
          total : null,
          data: [],
          search: ''
        }
  }

  componentDidMount() {
    this.fetchData(url)
  }

  fetchData(url) {
    fetch(url, {
        method: "GET",
    })
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result
            })
            console.log(this.state.data);
            
        })
  }
  handlePageChange = (current_page) => {
    this.setState({
        current_page : current_page
    })
    this.set_url(current_page)
    this.fetchData(this.url)
    
  }

  handleClick = (val) => {
    if (val.length > 0) {
        this.setState({
            data: val
        })
    }
    else {
        this.fetchData(url)
    }
  }

  set_url = (current_page) => {
     this.url = constants.GET_REQUEST + "&page=" + current_page;
  }

  render() {
        let filteredImages =  this.state.data 
        const result = filteredImages.map((entry, index) => {
            return ( 
                <div className="p-2 alignt-items-stretch" key={index}>
                    <Link to={'/show/' + entry.id}>
                        <img src={ entry.urls.small } alt={index}></img>
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <Search changeFilterName={this.handleClick.bind(this)}/>
                
                <div className="d-flex flex-wrap justify-content-center">{ result } </div>

                <Pagination changePage={ this.handlePageChange.bind(this) }/>
                
            
            </div>  
        )
    }
}

export default Images