import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import SearchErrorsReducer from './search_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  search: SearchErrorsReducer
});

export default ErrorsReducer;
