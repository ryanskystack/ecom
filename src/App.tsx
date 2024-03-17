import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from "./components/spinner";
import { GlobalStyle } from "./global.styles";
import './App.css';

const Navigation = lazy(() =>
  import("./routes/navigation")
);
const Shop = lazy(() => import("./routes/shop"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/*" element={<Shop />} />
      </Routes>
    </Suspense>
  );
}

export default App;