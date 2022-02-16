import React from 'react';
import TextInput from './TextInput';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '', lastName: '', email: '', comment: '',
    isFriendly: true, employment: '', favColor: ''
  });
  
  function handleChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput 
        key="firstName"
        name="firstName"
        type="text"
        value={formData.firstName}
        changeHandler={handleChange}
        placeholder="First Name"
      />
      <TextInput 
        key="lastName"
        name="lastName"
        type="text"
        value={formData.lastName}
        changeHandler={handleChange}
        placeholder="Last Name"
      />
      <TextInput 
        key="email"
        name="email"
        type="email"
        value={formData.email}
        changeHandler={handleChange}
        placeholder="Email Address"
      />
      <hr />
      <textarea
        name="comment"
        value={formData.comment}
        placeholder="Type a comment..."
        onChange={handleChange}
      />
      <input 
        key="isFriendly"
        id="isFriendly"
        name="isFriendly"
        type="checkbox"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">I am friendly.</label>
      <hr />
      <h2>{`${formData.firstName} ${formData.lastName}`}</h2>
      <h2>{formData.email}</h2>
      <fieldset>
        <legend>Current employment status</legend>
        <input 
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input 
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input 
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      <hr />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <button style={{float: "right"}}>Submit</button>
    </form>
  );
};