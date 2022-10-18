import './App.css';
import styled from 'styled-components';

import data from './initialData';
import Task from './Task';

function App() {
  const { roomates } = data;

  return (
    <div className='App'>
      <Container>
        <Title>To Do</Title>
        <TaskList>
          {roomates.map((roomate) => (
            <Task key={roomate.id} roomateName={roomate.name} />
          ))}
        </TaskList>
      </Container>
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
