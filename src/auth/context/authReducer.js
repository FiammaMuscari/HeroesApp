import { types } from '../types/types';

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            console.log(action.payload);
            return {
                ...state,
                logged: true,
                user: action.payload,
            };
        case types.logout:
            return {
                ...state,
                logged: false,
                user: null,
            }            
    
        default:
            return state;
    }

}