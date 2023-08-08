const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
};

/**
 * @param { {name : string , count : number} } state l'état courrant
 * @param { {type : string , payload : state} } action action à appliquer. Contient un type et un contenu (payload)
 * @returns { state } le nouveau état modifié (ou non) par l'action
 */
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return { name: state.name, count: state.count + action.payload };
        case ACTIONS.DECREMENT:
            return { name: state.name, count: state.count - action.payload };
        case ACTIONS.RESET:
            return { name: state.name, count: 0 };
        default:
            return state;
    }
};

let counter = { name: "Timer", count: 0 };
const incrementAction = { type: ACTIONS.INCREMENT, payload: 1 };

counter = reducer(counter, incrementAction);
console.log(counter); // { name: 'Timer', count: 1}

counter = reducer(counter, { type: ACTIONS.INCREMENT, payload: 10 });
console.log(counter); // { name: 'Timer', count: 11}

counter = reducer(counter, { type: ACTIONS.DECREMENT, payload: 5 });
console.log(counter); // { name: 'Timer', count: 6}

counter = reducer(counter, { type: ACTIONS.RESET });
console.log(counter); // { name: 'Timer', count: 0}