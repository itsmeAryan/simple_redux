import {ReadData} from "./Type"

export const ReadFunction=(data)=>{
    return{
        type:ReadData,payload:data
    }
}