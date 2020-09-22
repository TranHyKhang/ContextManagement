import CreateDataContext from './CreateDataContext';

const TodoReducer =  (state, action) => {
    switch(action.type) {
        case 'add_item': 
            const newItem = {
                id: Math.floor(Math.random() * 1000),
                title: action.payload.title
            }
            return [...state, newItem];
        case 'remove_item':
            return state.filter(item => item.id !== action.payload);
        case 'edit_item':
            return state.map(item => item.id === action.payload.id ? action.payload : item)
        default: 
            return state;
    }
}

const addTodo = (dispatch) => {
    return (title, callback) => {
        dispatch({
            type: 'add_item',
            payload: {title}
        })
        if(callback) {
            callback();
        }
    }
}

const removeTodo = (dispatch) => {
    return (id) => {
        dispatch({
            type: 'remove_item',
            payload: id
        })
    }
}

const editTodo = (dispatch) => {
    return (id, title, callback) => {
        dispatch({
            type: 'edit_item',
            payload: {id, title}
        })
        if(callback) {
            callback();
        }
    }
}

export const {Context, Provider} = CreateDataContext(
    TodoReducer,
    {addTodo, removeTodo, editTodo},
    [{
        id: 10,
        title: 'Hy Khang'
    },
    {
        id: 1,
        title: 'Khang Hy'
    },
    {
        id: 2,
        title: 'Hy Hy'
    },
    {
        id: 3,
        title: 'Khang Khang'
    }]
)