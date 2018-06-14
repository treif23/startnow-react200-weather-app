import React from 'react';
import CityInfoEntries from './components/cityInformation';
import HistoryEntries from './components/history';
import SearchEntries from './components/search';


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
        <SearchEntries />
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityInfoEntries />
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
