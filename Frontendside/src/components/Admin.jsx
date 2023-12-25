import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from "react-router-dom"

const Admin = () => {
  const [users, setUsers] = useState([]); 
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('name');

  useEffect(() => {
    axios.get("http://localhost:3001")
      .then(result => {
        setUsers(result.data);
        setFilteredUsers(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const updatedFilteredUsers = users.filter((user) => {
      if (searchCategory === 'id') {
        return user._id.toLowerCase() === searchQuery.toLowerCase();
      } else if (searchCategory === 'name') {
        return user.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
    setFilteredUsers(updatedFilteredUsers);
  };

  const handledelete=(id)=>{
axios.delete("http://localhost:3001/delete/"+id)
.then(result =>{console.log(result)
window.location.reload()})
.catch(err => console.log(err))
}


  return (
    <div className='vh-100 bg-secondary bg-opacity-50' >

      <nav className="navbar bg-dark ">
  <div className="container text-white ">
    <a className="navbar-brand text-white  fs-6 text-uppercase" href="#">Customer Data Management System</a>
    <h5>Admin</h5>
  </div>
</nav>

       <div className='d-flex justify-content-around my-4 '>
        <div>
<div className='d-flex mx-5'>
<div className='d-flex align-items-center'>
<label htmlFor="" className='me-2'>Category : </label>
            <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
              >
                <option value="name">Name</option>
                <option value="id">ID</option>
              </select>

</div>
<form onSubmit={handleSearch} className='mx-5 d-flex' >
             
             <input
               type="search"
               placeholder='search by name or id'
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className='ps-3'
               style={{outline:"none",border:"none"}}
             />
             <button type="submit" className='mx-2 btn btn-primary'>Search</button>
           
           </form>
           </div>
        </div>
          
            <Link to="/add" className='btn btn-success me-5'>Add +</Link>

          </div>
      
      <div className='bg-white rounded p-3 w-75 m-auto'>
     
        <table className='table'>
          <thead>
            <tr>
             <th>Name</th>
             <th>phone Number</th>
             <th>Email</th>
             <th>Upadte</th>
             <th>Delete</th>
           </tr></thead>
          <tbody>
            {filteredUsers.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
             <td>{item.phnum}</td>
             <td>{item.email}</td>
             <td>
             <Link to={`/update/${item._id}`} className='btn btn-dark'>Update</Link>  
               </td>
               <td><button className='btn btn-danger' onClick={(e)=>handledelete(item._id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
