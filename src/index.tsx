import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import UserPlants from './components/UserPlants';
import PlantForum from './components/PlantForum/PlantForum';
import Marketplace from './components/Marketplace';
import PlantsClass from './components/PlantsClass';
import Registration from './components/Registration/Registration';

const routerConfig = createBrowserRouter([
  {
    path:"/",
    element:<Home setMenuItem={()=>undefined}/>
  },
  {
    path:"/userprofile",
    element:<UserProfile setMenuItem={()=>undefined} />
  },
  {
    path:"/userplants",
    element:<UserPlants setMenuItem={()=>undefined} />
  },
  {
    path:"/plantforum",
    element:<PlantForum setMenuItem={()=>undefined} />
  },
  {
    path:"/marketplace",
    element:<Marketplace setMenuItem={()=>undefined} />
  },
  {
    path:"/plantsclass",
    element:<PlantsClass setMenuItem={()=>undefined} />
  },
  {
    path:"/registration",
    element:<Registration setMenuItem={()=>undefined} />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>
);
reportWebVitals();

