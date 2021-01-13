import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerQuarter } from '@fortawesome/free-solid-svg-icons';
interface Itemperature {
    actual: number;
    feelsLike: number;
    min: number;
    max: number;
}
const Temperature = ({ temperature }: { temperature: Itemperature }) => {
    return (
        <div className={'weatherContainer__cardContainer'}>
            <div className={`weatherContainer__cardContainer__title tempColor`}>
                <h2>Temperature</h2>
                <FontAwesomeIcon
                    className={'icon'}
                    icon={faThermometerQuarter}
                />
            </div>

            <div className={'weatherContainer__cardContainer__dataWrapper'}>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>Actual</p>
                    <p>{temperature.actual}</p>
                </div>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>feels like</p>
                    <p>{temperature.feelsLike}</p>
                </div>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>min</p>
                    <p>{temperature.min}</p>
                </div>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>max</p>
                    <p>{temperature.max}</p>
                </div>
            </div>
        </div>
    );
};

export default Temperature;
