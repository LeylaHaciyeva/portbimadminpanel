import React from 'react'

const Register = () => {
  return (
    <div>
      <h2>Registration</h2>
      <form method="post" role="form">
        <label>fistname:</label>
        <input type="text" id="fistname" name="fistname" placeholder="Enter your fistname"
          required />
        <label >lastname:</label>
        <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname"
          required />
        <label >email:</label>
        <input type="text" id="email" name="email" placeholder="Enter your email"
          required />
        <label>Password:</label>
        <input type="password" id="password" name="password"
          placeholder="Enter your Password" required />
        <button type="submit">Register</button>
      </form>
      <div>
        <span>Username is Taken</span>
      </div>
      <div>
        <span className="form-footer">Already have an account? <a href='/login'>Login</a>here.</span>
      </div>
    </div>
  )
}

export default Register
