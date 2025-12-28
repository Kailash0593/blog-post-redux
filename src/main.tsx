import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers.ts';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Provider store={store} >
    <RouterProvider router={router} >

    </RouterProvider>
  </Provider>
)
