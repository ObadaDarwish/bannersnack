import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './reducers/weatherReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
    weatherReducer: weatherReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;
