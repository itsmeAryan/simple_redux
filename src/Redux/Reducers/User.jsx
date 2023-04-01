import {ReadData} from "../Actions/Type"
const initail ={
    name:"",
    email:"",
    password:""
}
const UserData=(state=initail,action)=>{
    switch(action.type){
        case ReadData:return {
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            password:action.payload.password,
        }
        default: return state;
    }
}
export default UserData;