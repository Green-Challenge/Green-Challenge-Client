import React from 'react';
import SelectCity from './SelectCity';
import SelectState from './SelectState';

function ProfileContent() {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">닉네임</label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          // onChange={e => setDetails({...details, name: e.target.value})}
          // value={details.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">거주지</label>
        <br />
        <SelectCity />
        <SelectState />
      </div>
    </div>
  );
}

export default ProfileContent;
