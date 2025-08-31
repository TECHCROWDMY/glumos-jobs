import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages-section/Home';
import PrivacyPolicyPage from './pages-section/PrivacyPolicyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;