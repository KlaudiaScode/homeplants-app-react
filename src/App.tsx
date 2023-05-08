import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import PlantForum from './components/PlantForum';
import PlantsClass from './components/PlantsClass';
import Shop from './components/Shop';
import UserPlants from './components/UserPlants';
import UserProfile from './components/UserProfile';
import Registration from './components/Registration/Registration';

function App() {
  const [menuItem, setMenuItem] = useState('homepage'); 

  function updateMenuItem(menuItemName: string){
    setMenuItem(menuItemName)
    window.history.pushState({},'',`/${menuItemName}`)
  }

  useEffect(()=>{
    function handlePopState(event: PopStateEvent){
      const pathArray = window.location.pathname.split('/');
      const newMenuItem = pathArray[1];
      setMenuItem(newMenuItem)
    }
    window.addEventListener('popstate',handlePopState)
    
    return ()=>{
      window.removeEventListener('popstate',handlePopState)
    }
  },[])

  switch(menuItem){
    case 'registration':
      return (
        <Registration setMenuItem={updateMenuItem} />
      )
    case '':
    case 'homepage':
      return(
        <Home setMenuItem={updateMenuItem} />
      )
    case 'userprofile':
      return(
        <UserProfile setMenuItem={updateMenuItem} />
      )
    case 'userplants':
      return(
        <UserPlants setMenuItem={updateMenuItem} />
    )
    case 'shop':
      return(
        <Shop setMenuItem={updateMenuItem} />
    )
    case 'plantforum':
      return(
        <PlantForum setMenuItem={updateMenuItem} />
    )
    case 'plantsclass':
      return(
        <PlantsClass setMenuItem={updateMenuItem} />
    )
    default: 
        return(
          <div>Nieznany id strony {menuItem}</div>
        )
  }
}
export default App;
