import { Action } from '@ngrx/store';
import { makeClone } from '../utilities/helpers';
import { Actions } from './reducerActions/appState-action';

// ActionTypes
export const
    UPDATE_APP_STATE = 'UPDATE_APP_STATE', UPDATE_TASK_LIST = 'UPDATE_TASK_LIST';

// declare all valid properties in initial state, as we validate when updating
const initialAppState = {

    /* user */
    'user.userRole': "",
    'user.isUserLoggedIn': false,
    'user.tasks': [],

};


export function appState(state: any = initialAppState, action: Actions) {
    switch (action.type) {

        case UPDATE_APP_STATE:
            var newState = makeClone(state);
            Object.keys(action.payload).map((prop) => {
                // only update known properties, to catch errors
                if (prop in state) {
                    let newValue = action.payload[prop];
                    newState[prop] = newValue;
                } else {
                    // console.log(`invalid property [${prop}] passed into UiState-reducer`);
                }
            });
            return newState;

        case UPDATE_TASK_LIST:
            var newState = makeClone(state);
            Object.keys(action.payload).map((prop) => {
                // only update known properties, to catch errors
                if (prop in state) {
                    let newValue = action.payload[prop];
                    newState[prop] = newValue;
                } else {
                    // console.log(`invalid property [${prop}] passed into UiState-reducer`);
                }
            });
            return newState;

        default:
            return state;

    }
};
