import React from 'react';
import styled from 'styled-components';
import CompleteTree from './CompleteTree';
import NormalTree from './NormalTree';
import StatusTree from './StatusTree';

function CircleContainer() {
  return (
    <Container>
      <NormalTree />
      <StatusTree />
      <CompleteTree />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  position: fixed;
  margin-top: 458px;
  margin-left: 24px;
  text-align: center;
`;
export default CircleContainer;
