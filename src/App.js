import './App.css';
import styled from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import data from './initialData';
import Task from './Task';

function App() {
  const { roomates } = data;

  const onDragEnd = () => {
    console.log('Something happened');
  };

  return (
    <div className='App'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          <Title>To Do</Title>

          <Droppable droppableId='1'>
            {(provided) => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                {roomates.map((roomate, index) => (
                  <Task
                    roomateName={roomate.name}
                    id={`${roomate.id}`}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      </DragDropContext>
    </div>
  );
}

export default App;

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const Title = styled.h1`
  padding: 15px;
`;

const TaskList = styled.div`
  padding: 15px;
`;
