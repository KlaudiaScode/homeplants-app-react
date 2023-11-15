import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';
import YardSharpIcon from '@mui/icons-material/YardSharp';
import NavButton from "./NavButton";

export default function Nav() {
  const buttonArray= [
    {
      to:"/",
      icon: HomeSharpIcon,
      dsc:"home page"
    },
    {
      to:"/userprofile/profile",
      icon:AccountCircleSharpIcon,
      dsc:"user profile"
    },
    {
      to:"/userplants",
      icon:YardSharpIcon,
      dsc:"user plants"
    },
    {
      to:"/plantforum",
      icon:PeopleAltSharpIcon,
      dsc:"plant forum"
    },
    {
      to:"/marketplace",
      icon:ShoppingCartCheckoutSharpIcon,
      dsc:"marketplace"
    },
    {
      to:"/plantsclass",
      icon:LocalLibrarySharpIcon,
      dsc:"plant class"
    },
    {
      to:"/registration",
      icon:LockResetSharpIcon,
      dsc:"registration"
    }
  ]
  return (
    <div className="menu">
      <Logo />
      <div className='menuIcons'>
        {buttonArray.map((btn)=>
    <NavLink to={btn.to}>
    {({ isActive }) => {
      return (
        <NavButton NavIcon={btn.icon} ariaLabel={btn.dsc} isActive={isActive} />
      )
    }}
    </NavLink>
)}
      </div>
    </div >
  )
}

//stworzyć funkcję która na podstawie danych z checkboxów child stworzy obiekt checkboxa parent:
// {id:0,label:'Parent',checked:false,indeterminate: false}

// Warunki brzegowe :
// Parent jest checked kiedy wszystkie jego dzieci są checked. 
//if(formCheckboxArray.checked === true){parent = checked} i wygląda tak {id:0,label:'Parent',checked:true}
// Parent jest unchecked jeśli wszystkie jego dzieci również są unchecked. 
//if(formCheckboxArray.checked === false){parent[checked] = false} i wygląda tak {id:0,label:'Parent',checked:false}
// (Parent jest indeterminate kiedy nie jest ani checked ani unchecked. 
// Nie wszystkie dzieci są zaznaczone ale część z nich jest.)
//if(parent !=== parent.checked ){parent.push(indeterminate: false)}

// const checkboxes = [
//   {id:1,label:'Newborns',checked:false},
//   {id:2,label:'Childrens',checked:false},
//   {id:3,label:'Mother',checked:false}
// ]
// const childrensTab = [
//   {id:2.1,label:'Toys',checked:false},
//   {id:2.2,label:'Clothes',checked:false},
//   {id:2.3,label:'Strollers',checked:false}
// ]

// class SelectableController extends Stimulus.Controller {
//   static get targets() {
//     return ['child', 'parent', 'default']
//   }

//   toggleSelection(evt) {
//     if (!this.hasParentTarget) return
    
//     if (evt.currentTarget == this.parentTarget) {
//       let childrenChecked = this.compute('children-checked-if')
//       for (let child of this.childTargets) {
//         child.checked = childrenChecked
//       }
//       if (this.hasDefaultTarget) {
//         let defaultChecked = this.compute('default-checked-if')
//         for (let defaultChild of this.defaultTargets) {
//           defaultChild.checked = defaultChecked
//         }
//       }
//     } else {
//       this.parentTarget.checked = this.compute('parent-checked-if')
//       this.parentTarget.indeterminate = this.compute('parent-indeterminate-if')
//     }
//   }
  
//   compute(attribute) {
//     if (!this.data.has(attribute)) return false

//     const me = this
//     const attributeValue = this.data.get(attribute)
//     const functionValues = attributeValue.split('&').map((functionName) => me[functionName]())

//     return functionValues.every((bool) => bool === true)
//   }
  
//   allChildrenChecked() {
//     return this.checkedChildrenTargets.length == this.childTargets.length
//   }
  
//   anyChildrenChecked() {
//     return this.checkedChildrenTargets.length > 0
//   }
  
//   noChildrenChecked() {
//     return this.checkedChildrenTargets.length == 0
//   }
  
//   parentChecked() {
//     return this.parentTarget.checked == true
//   }

//   get checkedChildrenTargets() {
//     return this.childTargets
//                .filter(child => child.checked)
//   }
// }

// (function() {
//   if (!("stimulus" in window)) {
//     window.stimulus = Stimulus.Application.start()
//   }

//   stimulus.register('checkbox-family', SelectableController)
// })()

