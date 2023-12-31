import { useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css'
import router from './routes';
import store from './store';

function App() {

  return (
    <>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App
