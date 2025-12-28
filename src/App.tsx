import './App.css'
import { Outlet } from 'react-router-dom';
import AppBar from './common/AppBar';
import AppBreadcrumbs from './common/AppBreadcrumbs';

function App() {
  return (
    <>
      <AppBar />
      <AppBreadcrumbs />
      <div className='mt-10'>
        <Outlet />
      </div>
    </>
  )
}

export default App
