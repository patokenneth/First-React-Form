import React from 'react'

const PersonalDetails = ({nextStep, prevStep, handleChange, values}) => {

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

  return (
    <div>
        <h4>PersonalDetails</h4>
        <label>lastname
            <input 
                type="text" 
                placeholder="last name" 
                value={values.lastname} 
                onChange={handleChange('lastname')}
            />
        </label>
        <label>firstname
            <input 
                type="text" 
                placeholder="first name" 
                value={values.firstname} 
                onChange={handleChange('firstname')}
            />
        </label><br/>
        <button onClick={ Continue }>Next</button>
        <button onClick={ Previous }>Previous</button>
    </div>
  )
}

export default PersonalDetails