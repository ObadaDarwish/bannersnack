import {
    GET_WEATHER,
    INVALID_CITY,
    LOAD_WEATHER,
} from '../actionTypes/actionTypes';
import { request, gql } from 'graphql-request';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface IActionType<T> {
    type: T;
    [key: string]: T;
}

export const updateWeather = (weather: {}): IActionType<{} | string> => {
    return {
        type: GET_WEATHER,
        weather: weather,
    };
};
export const invalidCity = (message: string): IActionType<string> => {
    return {
        type: INVALID_CITY,
        message: message,
    };
};
export const loadWeather = (
    isLoading: boolean
): IActionType<string | boolean> => {
    return {
        type: LOAD_WEATHER,
        isLoading: isLoading,
    };
};

export function fetchCityAsync(city: string, unit: string) {
    let query = gql`
  {
getCityByName(name:"${city}", config:{units:${unit}}) {
country
weather {
 temperature {
    actual
    feelsLike
    min
    max
    }
 summary {
    title
    description
    }
  wind {
    speed
    deg
    }
  clouds {
    all
    visibility
    humidity
    }
   }
  }
}
`;
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(loadWeather(true));
        request('https://graphql-weather-api.herokuapp.com/', query)
            .then(({ getCityByName }) => {
                if (getCityByName) {
                    dispatch(updateWeather(getCityByName));
                } else {
                    dispatch(
                        invalidCity(
                            `Please make sure that '${city}' is a valid City name!`
                        )
                    );
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => dispatch(loadWeather(false)));
    };
}
