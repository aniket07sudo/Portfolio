import * as actionTypes from '../actions';

export const Setuserid = (userid,name,email,rooms) => {
    return {
        type:actionTypes.SET_USERID,
        userId
    }
}
