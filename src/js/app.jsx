import React from 'react';
import CityInformationEntries from './components/cityInformation/cityInformationEntries';
import HistoryEntries from './components/history/historyEntries';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Origin Weather Application</h1>
          <div>
            <h7>Always know if you'll need an umbrella!</h7>
          </div>
        </div>
        <button type="button" className="btn-sm btn-primary">San Diego</button>
        <button type="button" className="btn-sm btn-primary">New York</button>
        <button type="button" className="btn-sm btn-primary">Washington D.C.</button>
        <button type="button" className="btn-sm btn-primary">London</button>
        <button type="button" className="btn-sm btn-primary">Tokyo</button>
        <div className='row'>
        <div className="input-group mb-3">
          <input type="text" id="bar" className="form-control col-11" placeholder="City Name" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
          <div className="input-group-append">
            <button id='search' className="btn btn-outline-secondary" type="button">Go!</button>
          </div>
        </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInformationEntries />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <HistoryEntries />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
          </div>
        </div>
      </div>
    );
  }
}
