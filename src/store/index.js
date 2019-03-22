import { createStore } from "redux";
import api from '../services';


const tweets = async function(){
    const response = await api.get('tweets');
    return response.data;
}

const INITIAL_STATE = {
    userName:localStorage.getItem('@GoTwitter:username'),
    tweets:tweets(),
    configs:{
        navLeft:{
            userNameEditable:false
        }
    }
}



function reducer (state = INITIAL_STATE , action){
    
    if(action.type === "EDIT_USERNAME"){
        return{
            ...state,
            userName:action.userName,
            configs:action.configs
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;