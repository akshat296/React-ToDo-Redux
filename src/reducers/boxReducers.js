export default function boxReducers(state = [], action)
{
    switch(action.type)
    {
        case 'BOX':
        return [...state, Object.assign({},action.box)];
        default :
        return state;
    }
} 