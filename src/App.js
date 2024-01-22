
import {Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import AppRouter from './components/AppRouter';



function App() {
  return (
    <div>
      <AppRouter/>
      <LandingPage/>
    </div>
  );
}

export default App;
