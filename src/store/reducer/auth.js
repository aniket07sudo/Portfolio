import * as actionTypes from '../actions';

const initialState = {
    userId:null
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_USERID:
            return {
                ...state,
                userId:action.userId
            }
        default:
            return initialState;
    }
}

export default reducer;