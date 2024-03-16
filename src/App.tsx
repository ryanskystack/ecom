import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from "./components/spinner";
import { GlobalStyle } from "./global.styles";
import './App.css';

const Shop = lazy(() => import("./routes/shop"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/*' element={<Shop />}>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;