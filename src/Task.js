import styled from 'styled-components';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Task({ roomateName, id, index }) {
  console.log(id);

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {roomateName}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;

const Container = styled.h2`
  border: 1px solid lightgray;
  padding: 10px;
  margin-bottom: 10px;
`;
