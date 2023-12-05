import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'

// Loaders
import { previewsLoader } from './pages/previews/Previews'
import { showLoader } from './pages/previews/PreviewDetails'
import { episodesLoader } from './pages/previews/SeasonDetails'

// Pages
import Homepage from './pages/Homepage'

import Previews from './pages/previews/Previews'
import PreviewsLayout from './pages/previews/PreviewsLayout'
import PreviewDetails from './pages/previews/PreviewDetails'
import SeasonDetails from './pages/previews/SeasonDetails'

import FavoritesLayout from './pages/Favorites/FavoritesLayout'
import Favorites from './pages/Favorites/Favorites'
import FavDetails from './pages/Favorites/FavDetails'
import FavSeasoninfo from './pages/Favorites/FavSeasoninfo'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Homepage />}>
        <Route path='previews' element={<PreviewsLayout />}>

          <Route 
            index
            element={<Previews/>} 
            loader={previewsLoader}
          />

          <Route 
            path=':id' 
            element={<PreviewDetails />} 
            loader={showLoader} 
          >
            <Route path=':season' element={<SeasonDetails />} loader={episodesLoader}/>

          </Route>

        </Route> 

        <Route path='favorites' element={<FavoritesLayout />}>

          <Route 
            index
            element={<Favorites/>} 
          />
          
          <Route 
            path=':id' 
            element={<FavDetails />} 
            loader={showLoader} 
          >
            <Route path=':season' element={<FavSeasoninfo />}/>

          </Route>
        </Route>
      </Route> 
    )
  )

  return (
    <RouterProvider  router={router}/>
  )
}

export default App
