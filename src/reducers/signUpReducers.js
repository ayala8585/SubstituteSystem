
const initialState = {
    type: 0
    }
    
    export const userReducer = (state = initialState, action) => {
    
        switch (action.type) {
            case "save_type":
                return { ...state, type: action.payload };
            default:
                return state;
        }
    }
    
    
    