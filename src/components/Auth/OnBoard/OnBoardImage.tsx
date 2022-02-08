import React from 'react';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';
// import styled from 'styled-components';

function OnBoardImage() {
  return (
    <div>
      <Icon name="onBoard_1" css={IconStyle} />
    </div>
  );
}

const IconStyle = css`
  width: 24px;
  cursor: pointer;
  margin: 24px 0;
  width: 100%;
  height: 320px;
`;

export default OnBoardImage;
