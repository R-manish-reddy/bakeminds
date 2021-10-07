import { createStore } from "redux";
import React from "react";



export const Redux = () => {


    const store = createStore((state={count:0},action)=>{

        switch(action.type){

            case 'INCREMENT':
                const increase = typeof action.add === 'number'? action.add: 1;
                return{
                    
                    count:state.count +increase
                }

            case 'RESET':
                return{
                    count:0
                }

            case 'SET':
                return{
                    count:action.count
                }

            case 'DECREMENT':
                const decrease = typeof action.minus === 'number'? action.minus: 1;

                return{
                    count:state.count - decrease
                }

                default:
                    return state;

        }
        
    })

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({
    type:'INCREMENT',
    add:5
})

store.dispatch({
    type:'DECREMENT',
    minus:2
})
store.dispatch({
    type:'SET',
    count:100
})


   



    return (
        <div>
            Redux loaded
        </div>
    )
}

export default Redux;

