import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home.jsx';
import AnnouncementsPage from './components/AnnouncementsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/announcement' element={<AnnouncementsPage />} />
      {/* <Route path='/resources' element={<ResourcePage />} />*/}
      {    /* <Route path='/about' element={<About />} />  */}
      {/* <Route path='/project' element={<Project />} />   */}
    </Routes>
  );
}

export default App;
