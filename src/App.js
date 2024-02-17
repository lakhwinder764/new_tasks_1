import './App.css';
import CreateProjectModal from './components/CreateProjectModal';
import SelectViewModal from './components/SelectViewModal';
import ManageProjectsModal from './components/ManageProjectsModal';
import ProjectTypeModal from './components/ProjectTypeModal';
import { useState } from 'react';

function App() {
  const [steps, setSteps] = useState(1);
  return (
    <>
    {
      steps === 1 && ( <CreateProjectModal steps={steps} setSteps={setSteps}/>)
    }
{
      steps === 2 && ( <ProjectTypeModal steps={steps} setSteps={setSteps}/>)
    }
    {
     steps === 3 && ( <SelectViewModal steps={steps} setSteps={setSteps}/>)
    }
     {
      steps === 4 && ( <ManageProjectsModal steps={steps} setSteps={setSteps}/>)
    }
  
  </>
  );
}

export default App;


