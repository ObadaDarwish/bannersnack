import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

interface Iclouds {
    visibility: number;
    humidity: number;
}
const Clouds = ({ clouds }: { clouds: Iclouds }) => {
    return (
        <div className={'weatherContainer__cardContainer'}>
            <div
                className={`weatherContainer__cardContainer__title cloudsColor`}
            >
                <h2>Clouds</h2>
                <FontAwesomeIcon className={'icon'} icon={faCloud} />
            </div>
            <div className={'weatherContainer__cardContainer__dataWrapper'}>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>visibility</p>
                    <p>{clouds.visibility}</p>
                </div>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>Humidity</p>
                    <p>{clouds.humidity}</p>
                </div>
            </div>
        </div>
    );
};

export default Clouds;
