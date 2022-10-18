import styled from 'styled-components';
import React from 'react';

function Task({ roomateName }) {
  console.log(roomateName);

  return (
    <div>
      <Container>{roomateName}</Container>
    </div>
  );
}

export default Task;

const Container = styled.h2`
  border: 1px solid lightgray;
  padding: 10px;
  margin-bottom: 10px;
`;
