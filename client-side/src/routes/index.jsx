import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Article from '../pages/DetailPost';
import DetailPost from '../pages/DetailPost';


const router = createBrowserRouter([
    {
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/article/:id/:slug', element: <DetailPost /> },
      ],
    },
  ]);
  
  export default router;
  



