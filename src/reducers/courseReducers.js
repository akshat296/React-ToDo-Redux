export default function courseReducers(state = [], action)
{
    switch(action.type)
    {
        case 'CREATE':
        return [...state, Object.assign({},action.payload)];

        case 'DELETE':
        return [...state.filter((item)=>{
            return item.id !== action.payload.id;
            })
          ];
        case 'DONE':
        return [...state];  
        
      
  
        default :
        return state;
    }
} 