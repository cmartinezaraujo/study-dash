import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StudyDash from './pages/StudyDash/StudyDash';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <StudyDash/>
    </div>
  );
}

export default App;
