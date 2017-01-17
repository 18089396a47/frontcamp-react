import INITIAL_STATE from '../constants/initialState';
import { ACTION_TYPES } from '../constants/actionTypes';

export default function articleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_ARTICLES:
            return Object.assign({}, state, action.articles);
        default:
            return state;
    }
}