import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {ReadFunction} from "./Redux/Actions/Action"
const App = () => {
  const users=useSelector(state=>state);
  console.log("dtu users",users)
  const dispatch=useDispatch();
  const submit=()=>{
    const fakeuser={
      name:"shoaib",
      email:"dtuCoder@gmail.com",
      password:"1234"
    }
    //dispatch functions
    dispatch(ReadFunction(fakeuser))
    // the moment you will call the function users will add
  }
  return<>
    <h1>hello ji</h1>
    <button onClick={submit}>load user</button>

  </>
}

export default App