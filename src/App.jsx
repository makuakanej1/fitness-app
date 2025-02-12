import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Journal from './pages/Journal';
import MainLayout from './layouts/MainLayout';
import AddEditPage from './pages/AddEditPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Journal />} />
        <Route path='/journal' element={<Journal />} />
        <Route path='/addedit' element={<AddEditPage />} />
        <Route path='/addedit/:id' element={<AddEditPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
