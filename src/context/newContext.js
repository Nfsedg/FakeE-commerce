import { createContext, useReducer } from 'react';

export const newContext = createContext();

export const Provider = ({ children }) => {
    const initialState = [
        {
			"productId": 1,
			"quantity": 4,
            "price": 109.95
		},
		{
			"productId": 2,
			"quantity": 1,
            "price": 22.3
		},
		{
			"productId": 3,
			"quantity": 6,
            "price": 55.99
		}
    ]
    const addItemToCart = (item, payload) => {
        for(let i of item) {
            if(i.productId === payload.productId) {
                const index = item.indexOf(i);
                
                item[index].quantity = item[index].quantity + 1;

                return item;
            }
        }
        item.push(payload)
        return item;
    }

    const ACTIONS = {
        ADD_ITEM: 'add-item',
        DELETE_ITEM: 'delete-item'
    }
    
    function reducer(items, action) {
        switch (action.type) {
            case ACTIONS.ADD_ITEM:
                return addItemToCart(items, action.payload)
            default:
                return items;
        }
    }

    const [itemCart, dispatch] = useReducer(reducer, initialState);
    const getTotalPrice = (itemCart) => {
        let count = 0;
        for(let i of itemCart) {
            let totalEachProduct = i.quantity * i.price;
            count = count + totalEachProduct;
        }

        return count;
    }

    return(
        <newContext.Provider value={{
            itemCart,
            dispatch,
            ACTIONS,
            getTotalPrice
        }}>
            { children }
        </newContext.Provider>
    )
};