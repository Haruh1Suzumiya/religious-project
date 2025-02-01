import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Legal from './pages/Legal';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
  );
};

export default App;