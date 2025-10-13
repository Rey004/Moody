import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home_page/Home'
import Moods from './pages/mood_page/Mood'

function App() {

    const Router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      // errorElement: <Error />,
      children: [
        {
          index: true, 
          element: <Home />
        },
        {
          path: 'moods', 
          element: <Moods />
        }
      ]
    }
  ]);


  return (
    <>
     <RouterProvider router={Router} />
    </>
  )
}

export default App
