import React from 'react';

export default class CityInfoEntries extends React.Component {
    render() {
        if (this.props.name == '') {
            return (

                <div className='card mb-3'>
                    <div id='city' className='card-header'>City Entries</div>
                    <div className='card-body'>
                        <form>
                            <div className='row'>

                                <h2 className='col-12' htmlFor='income-description' id='cityName'><strong>Search for a city!</strong></h2>
                                <div className='col-12' id='latitude'>{this.props.lat},{this.props.lon}</div>
                            </div>
                            <hr />

                            
                            


                        </form>
                    </div>
                </div>
            );

        } else {


            console.log('trying');
            const { search } = this.props;
            return (
                <div className='card mb-3'>
                    <div id='city' className='card-header'>City Entries</div>
                    <div className='card-body'>
                        <form>
                            <div className='row'>

                                <h2 className='col-12' htmlFor='income-description' id='cityName'><img src={'http://openweathermap.org/img/w/' + this.props.icon + '.png'} /><strong>{this.props.name}</strong></h2>
                                <div className='col-12' id='latitude'>Lat/Long: {this.props.lat},{this.props.lon}</div>
                            </div>
                            <hr />

                            <div className='row' id='info'>
                                <label className='col-4'><strong>Temp</strong></label>
                                <div className='col-4'>
                                    <strong>Pressure</strong>
                                </div>
                                <label className='col-4'><strong>Humidity</strong></label>
                                <div id="output1" className='col-4'>
                                    {this.props.temp}℉
                                </div>
                                <label id="output2" className='col-4'>{this.props.pressure}</label>
                                <div id="output3" className='col-4'>
                                    {this.props.humidity}%
                                </div>
                                <label id="low" className='col-4'><strong>Lowest Temp</strong></label>
                                <div id="high" className='col-4'>
                                    <strong>Highest Temp</strong>
                                </div>
                                <label id="wind" className='col-4'><strong>Wind Speed</strong></label>
                                <div id="output4" className='col-4'>
                                    {this.props.temp_min}℉
                                </div>
                                <label id="output5" className='col-4'>{this.props.temp_max}℉</label>
                                <div id="output6" className='col-4'>
                                    {this.props.speed}mph
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            );
        }

    }
}

