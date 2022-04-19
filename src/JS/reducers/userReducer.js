
import {
    GET_USERS,
    GET_USERS_FAILED,
    GET_USERS_SUCCESS,
  } from "../actionstypes/userstypes";
import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS } from "../actionstypes/userstypes";

const initialState = {
    user: [],
    loading: false,
    error : []
};
const userReducer = (state = initialState, {type, payload}) =>{
    switch(type) {
     case GET_USERS: 
     return  {
        ...state ,
        loading : true,
     };
     case GET_USERS_SUCCESS : 
     return {
         ...state ,
         loading : false,
         users : payload,
     };
     case GET_USERS_FAILED : 
     return {
         ...state,
         loading : false,
         users: : payload,
     };

     }



        default:
        return state;
    }
};
 
export default userReducer;