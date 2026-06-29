import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

import OverOnsPage from "@/pages/OverOnsPage";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/over-ons" element={<OverOnsPage />} />
      </Route>
    </Routes>
  );
}
