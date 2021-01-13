import {
    GET_WEATHER,
    INVALID_CITY,
    LOAD_WEATHER,
} from '../actionTypes/actionTypes';

export interface defaultStateInterface {
    isLoading: boolean;
    weather: {
        weather: {
            [key: string]: any;
        };
        country: string;
    } | null;
    message: string;
}

const defaultState: defaultStateInterface = {
    isLoading: false,
    weather: null,
    message: 'Please add a city!',
};

const weatherReducer = (
    state: defaultStateInterface = defaultState,
    action: any
) => {
    switch (action.type) {
        case GET_WEATHER: {
            return {
                ...state,
                weather: action.weather,
            };
        }
        case LOAD_WEATHER: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        case INVALID_CITY: {
            return {
                ...state,
                weather: null,
                message: action.message,
            };
        }
        default: {
            return state;
        }
    }
};

export default weatherReducer;
