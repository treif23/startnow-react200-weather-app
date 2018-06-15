const axios = require('axios');

export function searchCity(searchText){
    return {
        type: 'SEARCH_CITY',
        payload: {searchText}
    };
    
}

export function updateCityDescription(searchText) {

    return {
        type: 'UPDATE_CITY_DESCRIPTION',
        payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q='+searchText+'&units=imperial&APPID=719117474596e3118705d45da32c37f0').then(response => response.data)   
    };
}

// export function updateSanDiego() {

//     return {
//         type: 'UPDATE_SAN_DIEGO',
//         payload: axios.get('http://api.openweathermap.org/data/2.5/weather?q=san%20diego,us&units=imperial&APPID=719117474596e3118705d45da32c37f0').then(response => response.data)   
//     };
// }