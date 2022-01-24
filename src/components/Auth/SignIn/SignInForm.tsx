import React from 'react';

function SignInForm() {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        // onChange={e => setDetails({...details, name: e.target.value})}
        // value={details.name}
      />
    </div>
  );
}

export default SignInForm;
