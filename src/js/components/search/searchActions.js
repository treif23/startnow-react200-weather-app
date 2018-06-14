const axios = require('axios');

export function updateCityDescription() {

    return {
        type: 'UPDATE_CITY_DESCRIPTION',
        payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&APPID=719117474596e3118705d45da32c37f0').then(response => response.data)
    
        
            
    };
}