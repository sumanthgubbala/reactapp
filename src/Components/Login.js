import React from 'react'

const Login = () => {
  return (
    <>
        <form >
            <label for="name">Username</label>
            <input type="email" name="username"/><br />
            <label for="password">Password</label>
            <input type="password" name="password"/>
            <input type='submit' name="login"/><br />

        </form>
    </>
  )
}

export default Login