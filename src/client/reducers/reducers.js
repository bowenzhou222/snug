import { combineReducers } from 'redux';

import ideasReducer from 'app/ideas/ideasReducer';


const reducers = combineReducers({
  ideas: ideasReducer,
});

export default reducers;
