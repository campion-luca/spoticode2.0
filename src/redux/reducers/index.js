const initialState = {

    cart: {
        content: null,
        favourite: [],
    },
}

// test push

const mainReducer = (state = initialState, action) => {

    switch (action.type) {


        case "SAVE_THE_SONG":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    content: [action.payload]
                },
            };


            case "SAVE_TO_FAVOURITE":
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        content: [...state.cart.favourite, action.payload]
                    },
                };



        default: {
            // GESTIONE CASO NON PRESENTE NEI CASE
            return state
        }
    }
}

export default mainReducer