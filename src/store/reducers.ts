import {State} from "../model/State";
import { handleActions, Action } from 'redux-actions';

import {ADD_CIRCLE, DEL_CIRCLE, CLEAR_CIRCLES} from "./actions";
import Circle from "../model/Circle";

const initialState: State = [];


export default handleActions<any>({
        [ADD_CIRCLE]: (state:State, action:Action<Circle>): State => {
            return [action.payload, ...state];
        },
        [DEL_CIRCLE]: (state:State, action:Action<number>): State => {
            return [...state.slice(1, action.payload), ...state.slice(action.payload + 1)];
        },
        [CLEAR_CIRCLES]: (state:State, action:Action<void>): State => {
            return [];
        }
    },
    initialState
);