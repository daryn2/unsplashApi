import React, { Component } from 'react'

class Pagination extends Component {
    // constructor(){
    //     super()
    // }
    state = {
        users: null,
        total: 100,
        per_page: null,
        current_page: 1,
        is_disabled_start: true,
        is_disabled_end: false
      }    

    previous = () => {
        
        this.props.changePage(this.state.current_page - 1)
        this.setState({
            current_page : this.state.current_page - 1,
            is_disabled_start : this.state.current_page - 1 === 1 ? true : false,
            is_disabled_end : this.state.current_page === (Math.ceil(this.state.total / 10) === this.state.current_page) ? true : false

        })
    
        
    }
    next = () => {
        
        this.props.changePage(this.state.current_page + 1)
        this.setState({
            current_page : this.state.current_page + 1,
            is_disabled_end : this.state.current_page === (Math.ceil(this.state.total / 10) === this.state.current_page) ? true : false,
            is_disabled_start : this.state.current_page + 1 === 1 ? true : false
        })
    }
    render() {
        return (
            <div className="d-flex justify-content-center">
                <nav>
                    <ul className="pagination">
                        <li className={ "page-item " + (this.state.is_disabled_start ? 'disabled': '') }>
                            
                        <span className="page-link" href="#" onClick={ this.previous }>Previous</span>
                        </li>
                        
                        <li className={ "page-item " + (this.state.is_disabled_end ? 'disabled': '') }>
                        <a className="page-link" href="#" onClick={ this.next }>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Pagination