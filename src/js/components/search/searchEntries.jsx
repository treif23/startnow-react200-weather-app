const axios = require('axios');
import React from 'react';

import {
    updateCityDescription,
    searchCity,
    //updateSanDiego
} from './searchActions';

export default class SearchEntries extends React.Component {
    constructor(props) {
        super(props);

        this.handleButton = this.handleButton.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleButton(event) {
        const { dispatch } = this.props;
        const  searchText  = event.target.value;
        console.log(searchText);
        dispatch(updateCityDescription(searchText));
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

   


    render() {
        const { searchText } = this.props;
        return (
            <div>

                <button type="button" onClick={this.handleButton} value='San Diego' className="btn-sm btn-primary">San Diego</button>
                <button type="button" onClick={this.handleButton} className="btn-sm btn-primary" value='New York'>New York</button>
                <button type="button" onClick={this.handleButton} value='Washington' className="btn-sm btn-primary">Washington D.C.</button>
                <button type="button" onClick={this.handleButton} value='London' className="btn-sm btn-primary">London</button>
                <button type="button" onClick={this.handleButton} value='Tokyo' className="btn-sm btn-primary">Tokyo</button>
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