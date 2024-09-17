import React from 'react'

export const  Account = () => {
  return (
    <div className = "account"><form>
      <h2>Don't have an account? Create One</h2>
      <label id = "name" className = "Name">
        Username:
              </label>
        <input type = "text" className = "input"></input>
        <br />
        <label id = "password" className = "password">Password: </label>
        <input type = "password" className = "password"></input>
      </form>
    </div>
  )
}
export default Account;