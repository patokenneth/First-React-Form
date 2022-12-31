import React from 'react'

const UserDetails = ({nextStep, handleChange, values}) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
    <div>
        <h4>UserDetails</h4>
        <label>Email
            <input 
                type="text" 
                placeholder="email address" 
                value={values.email} 
                onChange={handleChange('email')}
            />
        </label>
        <label>Username
            <input 
                type="text" 
                placeholder="username" 
                value={values.username} 
                onChange={handleChange('username')}
            />
        </label>
        <button onClick={ Continue }>Next</button>
    </div>
  )
}

export default UserDetails
