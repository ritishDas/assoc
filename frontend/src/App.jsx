import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home.jsx';
import AnnouncementsPage from './components/AnnouncementsPage';
import AboutPage from './components/AboutPage';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/announcement' element={<AnnouncementsPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
}

export default App;