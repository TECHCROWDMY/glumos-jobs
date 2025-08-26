import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages-section/Home';
import PrivacyPolicy from './pages-section/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;