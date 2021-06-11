import React from 'react'

export const initialState = {
    basket : [],
    user : null,
    error : ''
};


const reducer = (state=initialState, action) => {

    switch(action.type){
        case 'ADD_PRODUCT':
            return {
                ...state, basket: [...state.basket, action.payload]
            }
        
        case 'REMOVE_PRODUCT':

        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );

        let newBasket = [...state.basket];

        if(index>=0){
            newBasket.splice(index, 1);
        }else{
            console.warn(`Item with ( id: ${action.id}) can\'t be removed because it doesn\'t exist.` )
        }

            return {
                ...state, 
                basket: newBasket
            }

        case 'ADD_USER':
            return{
                ...state, user : action.user
            }

        case 'REMOVE_USER':
            return{
                ...state, user : action.user
            }
        
        case 'EMPTY_BASKET':
            return{
                ...state, basket : []
            }

        case 'SAVE_ERROR':
            console.log(action.error)
                return{
                    ...state, error : action.error
                }

        case 'REMOVE_ERROR':
                return{
                    ...state, error : ""
                }
        
        default:
            return {
                state
            }
            
    }


}

export default reducer;