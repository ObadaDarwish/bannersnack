import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

interface Iwind {
    speed: number;
    deg: number;
}
const Wind = ({ wind }: { wind: Iwind }) => {
    return (
        <div className={'weatherContainer__cardContainer'}>
            <div className={`weatherContainer__cardContainer__title windColor`}>
                <h2>Wind</h2>
                <FontAwesomeIcon className={'icon'} icon={faWind} />
            </div>
            <div className={'weatherContainer__cardContainer__dataWrapper'}>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>Speed</p>
                    <p>{wind.speed}</p>
                </div>
                <div
                    className={
                        'weatherContainer__cardContainer__dataWrapper__item'
                    }
                >
                    <p>Deg</p>
                    <p>{wind.deg}</p>
                </div>
            </div>
        </div>
    );
};

export default Wind;
