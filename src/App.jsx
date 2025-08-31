import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages-section/Home';
import PrivacyPolicyPage from './pages-section/PrivacyPolicyPage';
import TermsPage from './pages-section/TermsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;