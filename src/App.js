import './App.css';
import CreateProjectModal from './components/CreateProjectModal';
import { useState } from 'react';

function App() {
  const [steps, setSteps] = useState(1);
  return (
  <CreateProjectModal steps={steps} setSteps={setSteps}/>
  );
}

export default App;


