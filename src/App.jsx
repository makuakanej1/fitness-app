import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Journal from './pages/Journal';
import MainLayout from './layouts/MainLayout';
import AddWorkout from './pages/AddWorkout';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<MainPage />}/>
    <Route path='/mainpage' element={<MainPage />}/>
    <Route path='/journal' element={<Journal />}/>
    <Route path='/addworkout' element={<AddWorkout />}/>
  </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App