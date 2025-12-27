import './App.css'
import { Outlet } from 'react-router-dom';
import AppBar from './common/AppBar';

function App() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}

export default App
