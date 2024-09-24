import { Outlet } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header className="font-Inter" />
      <Outlet className="font-Inter" />
    </div>
  );
}

export default App;
