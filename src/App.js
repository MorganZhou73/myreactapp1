import { createContext, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MessageParent from './components/MessageParent';
import { Counter } from './features/counter/Counter';
import Todos from './features/todos/Todos';
import Stock from './features/stock/Stock';
import Navigation from './components/Navigation';

const MyComponent1 = (data) => {
  console.log("data: " + JSON.stringify(data));
  return (
    <div>
      this is MyComponent1: {JSON.stringify(data)} 
    </div>
  );
};

const UserContext = createContext();

function About() {
  const data = {
		apple: 1,
		mongo: 2,
		banana: 3
	};

  return (
    <>
      <h1>About Page</h1>
      <MyComponent1 {...data} />
    </>
  );
}

function App() {
  const userValue = useMemo(() => ({ 
    user: { email: "xy@gmail.com" } 
  }), []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation /> 
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<MessageParent />} 
            />
            <Route path="/counter" element={
              <UserContext.Provider value={userValue}>
                <Counter />
              </UserContext.Provider>
            } />
            <Route path="/todos" element={<Todos />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
export { UserContext };
