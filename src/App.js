import { createContext, useMemo } from 'react';
import './App.css';
import MessageParent from './components/MessageParent';
import { Counter } from './features/counter/Counter';
import Todos from './features/todos/Todos';

const MyComponent1 = (data) => {
  console.log("data: " + JSON.stringify(data));
  return (
    <div>
      this is MyComponent1: {JSON.stringify(data)} 
    </div>
  );
};

const UserContext = createContext();

function App() {

  const data = {
		apple: 1,
		mongo: 2,
		banana: 3
	};

  const userValue = useMemo(() => ({ 
    user: { email: "xy@gmail.com" } 
  }), []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <MessageParent />

      <hr />
      <MyComponent1 {...data} />
      
      <UserContext.Provider value={userValue}>
        <Counter />
      </UserContext.Provider>
      <Todos />
    </div>
  );
}

export default App;
export { UserContext };
