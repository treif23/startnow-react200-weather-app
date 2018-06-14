const defaultState = {
    searchText: '',
    name: '',
    latitude: '',
    longitude: '',
    temp: '',
    pressure: '',
    humidity: '',
    lowestTemp: '',
    highestTemp: '',
    windSpeed: ''

};

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
            //action.type?
    switch (type) {
        //here in the case of the update description action
        case 'UPDATE_CITY_DESCRIPTION_FULFILLED': {
            //payload == response

            return {
                
                ...state,
                name: payload.name,
                lat: payload.coord.lat,
                lon: payload.coord.lon,
                temp: payload.main.temp,
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                temp_min: payload.main.temp_min,
                temp_max: payload.main.temp_max,
                speed: payload.wind.speed,
               
            };
        }

        // case 'UPDATE_CITY_DESCRIPTION_FULFILLED': {
        //     payload == response
        // }


    }

    return state;
}