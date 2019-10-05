import React, { Component } from 'react'
import Search from './Search'
import Pagination from "react-js-pagination";


class Images extends Component {
  constructor() {
      super()
      this.state = {
          data: [],
          search: ''
      }
  }

  componentDidMount() {
    const key = "3f8793f782668dd552c445ae38f2790ce73ae547dceb82a73c756dfc8be6d338";
    const url = "https://api.unsplash.com/photos/?page=2&client_id=" + key;
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

  handleClick = (val) => {
    this.setState({
        data: val
    })

  }

  render() {
        let filteredImages =  this.state.data 
        const result = filteredImages.map((entry, index) => {
            return ( 
                <div className="p-2" key={index}>
                    <img src={ entry.urls.small } alt={index}></img>
                </div>
            )
        })
        return (
            <div>
                <Search changeFilterName={this.handleClick.bind(this)}/>
                <div className="d-flex flex-wrap justify-content-center">{ result } </div>
                <Pagination
                        activePage = {1} 
                        itemsCountPerPage = { 10 }
                        totalItemsCount = { 200 }
                        onChange={this.handlePageChange}
                    />
            </div>  
        )
    }
}

export default Images