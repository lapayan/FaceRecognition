import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export default store; 
