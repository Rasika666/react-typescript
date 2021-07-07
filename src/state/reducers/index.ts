import { combineReducers } from "redux";
import repositoryReducer from './repositoryReducer';

const reducers = combineReducers({
    repository: repositoryReducer,
});

export default reducers;