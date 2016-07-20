import { createAction } from 'redux-actions';
import Circle from "../model/Circle";

export const ADD_CIRCLE = 'ADD_CIRCLE';
export const DEL_CIRCLE = 'DEL_CIRCLE';
export const CLEAR_CIRCLES = 'CLEAR_CIRCLES';

const addCircle = createAction<Circle>(
    ADD_CIRCLE,
    (circle: Circle) => circle
);

const delCircle = createAction<number>(
    DEL_CIRCLE,
    (index: number) => index
);

const clearCircles = createAction<void> (
    CLEAR_CIRCLES,
    () => {}
);

export {
    addCircle,
    delCircle,
    clearCircles
}