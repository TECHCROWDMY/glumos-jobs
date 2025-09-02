import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages-section/HomePage';
import PrivacyPolicyPage from './pages-section/PrivacyPolicyPage';
import TermsPage from './pages-section/TermsPage';
import Blog from './pages-section/BlogPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ADD THE COMPONENT HERE */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;