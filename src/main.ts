import Circle from "./model/Circle";
import Point from "./model/Point";
import { Store, createStore } from 'redux';
import rootReducer from './store';
import {State} from "./model/State";
import {addCircle} from "./store";

const initialState: State = [];

const store: Store = createStore(rootReducer, initialState);

store.subscribe(() => {
    let state: State = store.getState();
    let app = document.getElementById("app");
    let innerText = '';
    state.forEach((elem => {
        innerText += `
            <p>${elem}</p>
        `;
    }));
    app.innerHTML = innerText;
});

store.dispatch(addCircle(new Circle(new Point(5,6), 45)));


setTimeout(() => {
    store.dispatch(addCircle(new Circle(new Point(5,6), 45)));
}, 5000)



