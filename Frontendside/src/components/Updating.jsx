import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Updating = () => {

const {id}=useParams()
const navigate=useNavigate()
const [first, setfirst] = useState({name:"",email:"",phnum:""})

const updateinput=({target:{name,value}})=>{
  setfirst({...first,[name]:value})
  }
  
  useEffect(()=>{
    axios.get("http://localhost:3001/getuser/"+id)
    .then(result => {console.log(result)
    setfirst(result.data)})
    .catch(err => console.log(err))
    },[])

    const update=(e)=>{
      e.preventDefault();    
 axios.put("http://localhost:3001/update/"+id,first)
.then(result => console.log(result.data))
.catch(err => console.log(err))
      navigate("/")
  
      }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3 '>

<form onSubmit={update}>
  <h2>Update Customer </h2>
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
  <button>Update</button>
</form>
</div>
    </div>
  )
}

export default Updating