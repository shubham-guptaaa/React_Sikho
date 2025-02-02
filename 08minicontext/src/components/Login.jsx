import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [useername, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({useername, password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type='text'
        value={useername}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />
        {" "}
        <input type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login