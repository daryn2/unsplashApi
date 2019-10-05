import React, {Component} from 'react';
import './Search.css'



class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            imageFilter: ""
        }
    }

    fetchData(url) {
        fetch(url, {
            method: "GET",
        })
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result.results
                })
                console.log(this.state.data);
                
            })
      }

      
    handleChange = (e) => {
        console.log(e.target.value)
        var val = e.target.value
        this.setState({
            imageFilter: val
        })
        const key = "3f8793f782668dd552c445ae38f2790ce73ae547dceb82a73c756dfc8be6d338";
        const url = "https://api.unsplash.com/search/photos/?page=1&query=" + val + "&client_id=" + key;
        this.fetchData(url)
        console.log(this.state.imageFilter)
        this.props.changeFilterName(this.state.data)
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    render() {
        return (
                <div className="container">
                    <div className="active-cyan-4 mb-4">
                        <input className="form-control" 
                            type="text" 
                            placeholder="Search" 
                            value={ this.state.imageFilter } 
                            onChange= { this.handleChange } 
                            aria-label="Search"/>
                    </div>
                    
                </div>
        )
    }
}
export default Search