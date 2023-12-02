import React, { useEffect, useState } from 'react'

function App() {
  const [userDate,setUserData] = useState({
    username: "",
    password: ""
  })
  const [user,setUser] =useState([])
  const handleChange = (e)=>{
    setUserData({...userDate,[e.target.name]: e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:3305/index',{
      method: "POST",
      body: JSON.stringify(userDate),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
  }

  const fetchData = async(e)=>{
    const res = await fetch('http://localhost:3305/data',{
      method: "GET"
    })
    const data = await res.json()
    setUser(data)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
       <h3>Get  Data from Database Apis</h3>
       {user.map((element)=><li>Welcome Mr. {element.username}</li>)}
      <h3>{JSON.stringify(userDate)}</h3>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <div className="input">
          <label htmlFor="">Username</label>
          <input type="text" name="username"  value={userDate.username} onChange={handleChange} />
         </div>
         <div className="input">
          <label htmlFor="">Password</label>
          <input type="password" name="password" value={userDate.password}  onChange={handleChange}/>
         </div>
         <div className="input">
          <input type="submit"/>
         </div>
        </form>
        <h1>I am upload on git</h1>
    </div>
  )
}

export default App
