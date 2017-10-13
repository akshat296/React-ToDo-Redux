export default function boxReducers(state = [], action)
{
    switch(action.type)
    {
        case 'DELETE':
        return [...state, Object.assign({},action.payload)];
       
        case 'SUCCESS':
        return [Object.assign({},action.payload)].find((item)=>{
             if(item.id === 0)
            {return item;}
            return item;
        }
    );
        case 'HIDE':
        return [Object.assign({},action.payload)].find((item)=>{
             if(item.id === 0 )
             item.show = 0; 
            return item;
        });
        
        case 'DONE':
        return [...state, Object.assign({},action.payload)];
        
        case 'EDIT':
        return [...state, Object.assign({},action.payload)];
        default :
        return state;
    }
} 