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
import Plant from './components/Plant';
import SelectedPlantClass from './components/PlantsClass/SelectedPlantClass';
import SelectedCategory from './components/PlantsClass/SelectedCategory';

const routerConfig = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/userprofile",
    element:<UserProfile />
  },
  {
    path:"/userplants",
    element:<UserPlants />
  },
  {
    path:"/userplants/:id",
    element:<Plant />
  },
  {
    path:"/plantforum",
    element:<PlantForum />
  },
  {
    path:"/marketplace",
    element:<Marketplace />
  },
  {
    path:"/plantsclass",
    element:<PlantsClass />
  },
  {
    path:"/plantsclass/category",
    element:<SelectedCategory />
  },
  {
    path:"/plantsclass/category/blooming-in-summer",
    element:<SelectedPlantClass />
  },
  {
    path:"/registration",
    element:<Registration />
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

