import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Adding = () => {

  const navigate=useNavigate()
const [first, setfirst] = useState({name:"",email:"",phnum:""})

const updateSubmit= async(e)=>{
e.preventDefault();
let send= await axios.post("http://localhost:3001/add",first)
console.log(send);
navigate("/")

//  axios.post("http://localhost:3001/add",first)
// .then(result => console.log(result.data))
// .catch(err => console.log(err))
}


const updateinput=({target:{name,value}})=>{
setfirst({...first,[name]:value})
}

  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3 '>

<form onSubmit={updateSubmit}>
  <h2>Add Customer</h2>
  <div className='mb-2'>
    <label htmlFor="">Name :</label>
  <input type="text" placeholder='Enter Name' className='form-control'  name='name' value={first.name} onChange={updateinput}/>
  </div>
  <div className='mb-2'>
    <label htmlFor="">Phone Number :</label>
  <input type="text" placeholder='Enter Phone Number' className='form-control'  name='phnum' value={first.phnum} onChange={updateinput}/>
  </div>
  <div className='mb-2'>
    <label htmlFor="">E-mail :</label>
  <input type="email" placeholder='Enter Email' className='form-control' name='email' value={first.email} onChange={updateinput}/>
  </div>
  <button>Add</button>
</form>
</div>
    </div>
  )
}

export default Adding