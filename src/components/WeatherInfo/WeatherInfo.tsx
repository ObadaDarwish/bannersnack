import React from 'react';
import { useSelector } from 'react-redux';
import MessageCard from '../MessageCard/MessageCard';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import Temperature from './Temperature/Temperature';
import Summary from './Summary/Summary';
import Clouds from './Clouds/Clouds';
import Wind from './Wind/Wind';
import { defaultStateInterface } from '../../store/reducers/weatherReducer';

const WeatherInfo = () => {
    interface rootReducer {
        weatherReducer: defaultStateInterface;
    }
    const { weather: weatherData, isLoading, message } = useSelector(
        (state: rootReducer) => state.weatherReducer
    );
    return (
        <div className={'weatherContainer'}>
            {isLoading ? (
                <LoadingIndicator />
            ) : weatherData ? (
                <>
                    <Summary summary={weatherData.weather.summary} />
                    <Temperature
                        temperature={weatherData.weather.temperature}
                    />
                    <Clouds clouds={weatherData.weather.clouds} />
                    <Wind wind={weatherData.weather.wind} />
                </>
            ) : (
                <MessageCard message={message} />
            )}
        </div>
    );
};

export default WeatherInfo;
