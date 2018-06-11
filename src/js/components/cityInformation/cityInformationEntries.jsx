import React from 'react';

export default class CityInformationEntries extends React.Component {
        render() {
            console.log('trying');
            return (
                <div className='card mb-3'>
                    <div id='city' className='card-header'>City Entries</div>
                    <div className='card-body'>
                        <form>
                            <div className='row'>
                                <h2 className='col-12' htmlFor='income-description' id='cityName'>*City Name*</h2>
                                <div className='col-12' id='latitude'>*LAT/Long*</div>
                            </div>
                            <hr />

                            <div className='row' id='info'>
                                <label className='col-4'>Temp</label>
                                <div className='col-4'>
                                    Pressure
                                </div>
                                <label className='col-4'>Humidity</label>
                                <div className='col-4'>
                                    *Temp Output*
                                </div>
                                <label className='col-4'>*Pressure Output*</label>
                                <div className='col-4'>
                                    *Humi Output*
                                </div>
                                <label id="low" className='col-4'>Lowest Temp</label>
                                <div  id="high"  className='col-4'>
                                    *Highest Temp*
                                </div>
                                <label id="wind" className='col-4'>Wind Speed</label>
                                <div className='col-4'>
                                    *Low Output*
                                </div>
                                <label className='col-4'>*Highest Output*</label>
                                <div className='col-4'>
                                    *Wind Output*
                                </div>
                            </div>
                            
                            
                        </form>
                    </div>
                </div>
            );

        }
    }

