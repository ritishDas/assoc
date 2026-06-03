import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home.jsx';
import AnnouncementsPage from './components/AnnouncementsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/announcements' element={<AnnouncementsPage />} />
    </Routes>
  );
}

export default App;