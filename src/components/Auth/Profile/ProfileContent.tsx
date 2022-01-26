import React from 'react';
import styled from 'styled-components';
import SiName from './SiName';
import SggName from './SggName';

function ProfileContent() {
  return (
    <div>
      <div className="form-nickname">
        <label htmlFor="nickname">닉네임</label>
        <br />
        <input
          type="text"
          name="nickname"
          id="nickname"
          // onChange={e => setDetails({...details, name: e.target.value})}
          // value={details.name}
        />
      </div>
      <div className="form-location">
        <label htmlFor="location">거주지</label>
        <br />
        <SiName />
        <SggName />
      </div>
    </div>
  );
}

export default ProfileContent;
