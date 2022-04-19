import axios from "axios";
import { GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS } from "../actionstypes/userstypes"

export const getUsers = ()=> (dispatch)=>{

    dispatch({type : GET_USERS})

    try{

    const res = axios.get("https://jsonplaceholder.typicode.com/users")

    dispatch ({type:GET_USERS_SUCCESS, payload: res.data});

    } catch (error){
     dispatch ({type : GET_USERS_FAILED, payload : error.response})
    }

}

