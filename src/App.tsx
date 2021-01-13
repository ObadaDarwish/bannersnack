import React from 'react';
import './styles/styles.scss';
import CitySearch from './components/CitySearch/CitySearch';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
function App() {
    return (
        <div className="appContainer">
            <div className="appContainer__appWrapper">
                <CitySearch />
                <WeatherInfo />
            </div>
        </div>
    );
}

export default App;
