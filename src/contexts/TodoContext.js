import CreateDataContext from './CreateDataContext';
import jsonServer from '../api/jsonServer'

const TodoReducer =  (state, action) => {
    switch(action.type) {
        case 'get_data':
            return action.payload
        case 'add_item':
            return [...state, action.payload];
        case 'remove_item':
            return state.filter(item => item.id !== action.payload);
        case 'edit_item':
            return state.map(item => item.id === action.payload.id ? action.payload : item)
        default: 
            return state;
    }
}

const getList = (dispatch) => {
    return async () => {
        const res = await jsonServer.get('/posts');
        dispatch({
            type: 'get_data',
            payload: res.data
        })
    }
}

const addTodo = (dispatch) => {
    return async (title, callback) => {
        await jsonServer.post('/posts', {title})
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
    return async (id) => {
        await jsonServer.delete('/posts/' + id);
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
    {addTodo, removeTodo, editTodo, getList},
    []
)