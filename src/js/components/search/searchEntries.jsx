const axios = require('axios');
import React from 'react';

import {
    updateCityDescription,
    searchCity,
   // updateSanDiego
} from './searchActions';

export default class SearchEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
       // this.sanDiegoClick = this.sanDiegoClick.bind(this);
    }

    handleSearchInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(searchCity(value));
    }

    handleSearch(event) {
        // dispatch was provided by connect()
        const { dispatch, searchText } = this.props;
        dispatch(updateCityDescription(searchText));
        console.log(this.props);
    }

    // sanDiegoClick(event) {
    //     const { dispatch } = this.props;
    //     const { value } = event.target;
    //     dispatch(updateSanDiego(value));
    // }


    render() {
        const { searchText } = this.props;
        return (
            <div>

                <button type="button" className="btn-sm btn-primary">San Diego</button>
                <button type="button" className="btn-sm btn-primary">New York</button>
                <button type="button" className="btn-sm btn-primary">Washington D.C.</button>
                <button type="button" className="btn-sm btn-primary">London</button>
                <button type="button" className="btn-sm btn-primary">Tokyo</button>
                <div className='row'>
                    <div className="input-group mb-3">
                        <input type="text" id="bar" className="form-control col-11" placeholder="City Name" aria-label="Recipient's username" aria-describedby="basic-addon2"
                            onChange={this.handleSearchInput}></input>
                        <div className="input-group-append">
                            <button id='search' className="btn btn-outline-secondary" onClick={this.handleSearch} type="button">Go!</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}