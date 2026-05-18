/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/produtos" element={<Catalog />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

