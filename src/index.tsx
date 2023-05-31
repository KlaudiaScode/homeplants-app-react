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
import Description from './components/Plant/components/Description';
import CarePlant from './components/Plant/components/CarePlant';
import CourseGrowth from './components/Plant/components/CourseGrowth';
import Note from './components/Plant/components/Note';
import PlantGallery from './components/Plant/components/PlantGallery';
import Questions from './components/PlantForum/components/Questions';
import Members from './components/PlantForum/components/Members';
import Posts from './components/PlantForum/components/Posts';
import Multimedia from './components/PlantForum/components/Multimedia';
import Messages from './components/PlantForum/components/Messages';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import LogForm from './components/UserProfile/components/LoginForm';
import UserData from './components/UserProfile/components/UserData';


const routerConfig = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/userprofile",
    element:<UserProfile />,
    children:[
      {
        path:"/userprofile/data-profile",
        element:<UserData />
      },
      {
        path:"/userprofile/settings",
        element:<LogForm />
      },
    ]
  },
  {
    path:"/userplants",
    element:<UserPlants />
  },
  {
    path:"/userplants/:id",
    element:<Plant />,
    children:[
      {
        path:"/userplants/:id/description",
        element:<Description />
      },
      {
        path:"/userplants/:id/care-plant",
        element:<CarePlant />
      },
      {
        path:"/userplants/:id/course-growth",
        element:<CourseGrowth />
      },
      {
        path:"/userplants/:id/note",
        element:<Note />
      },
      {
        path:"/userplants/:id/plant-gallery",
        element:<PlantGallery />
      }
    ]
  },
  {
    path:"/plantforum",
    element:<PlantForum />,
    children:[
      {
        path:"/plantforum/posts",
        element:<Posts />
      },
      {
        path:"/plantforum/members",
        element:<Members />
      },
      {
        path:"/plantforum/questions",
        element:<Questions />
      },
      {
        path:"/plantforum/multimedia",
        element:<Multimedia />
      },
      {
        path:"/plantforum/messages",
        element:<Messages />
      }
    ]
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
    <ThemeProvider theme={theme} >
      <RouterProvider router={routerConfig} />
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();

