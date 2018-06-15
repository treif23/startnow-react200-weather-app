import { connect } from 'react-redux';
import SearchEntries from './searchEntries';

function mapStoreToProps(store) {

    return {
        searchText: store.search.searchText,

        data: store.search.data,

        name: store.search.name,
        lat: store.search.lat,
        lon: store.search.lon,
        temp: store.search.temp,
        pressure: store.search.pressure,
        humidity: store.search.humidity,
        temp_min: store.search.temp_min,
        temp_max: store.search.temp_max,
        speed: store.search.speed,
        icon: store.search.icon
    };
}

export default connect(mapStoreToProps)(SearchEntries);
