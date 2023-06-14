import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Logo";
import IconButton from "@mui/material/IconButton";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';
import YardSharpIcon from '@mui/icons-material/YardSharp';
import NavButton from "./NavButton";


export interface NavProps {
  setMenuItem: (arg: string) => void
}

export default function Nav() {
  return (
    <div className="menu">
      <Logo />
      <div className='menuIcons'>
        <NavLink to="/">
          {({ isActive }) => {
            return (
              <NavButton NavIcon={HomeSharpIcon} ariaLabel="home page" isActive={isActive} />
            )
          }}
        </NavLink>
        <NavLink to="/userprofile/profile">
          {({ isActive }) => {
            return (
              <NavButton NavIcon={AccountCircleSharpIcon} ariaLabel="user profile" isActive={isActive} />
            )
          }}
        </NavLink>
        <NavLink to="/userplants">
          {({ isActive }) => {
            return (
              <NavButton NavIcon={YardSharpIcon} ariaLabel="user plants" isActive={isActive} />
            )
          }}
        </NavLink>
        <NavLink to="/plantforum">
          {({ isActive }) => {
            return (
              <NavButton NavIcon={PeopleAltSharpIcon} ariaLabel="plant forum" isActive={isActive} />
            )
          }}
        </NavLink>
        <NavLink to="/marketplace">
          {({ isActive }) => {
            return (
              <NavButton NavIcon={ShoppingCartCheckoutSharpIcon} ariaLabel="marketplace" isActive={isActive} />
            )
          }}
        </NavLink>
        <NavLink to="/plantsclass">
          {({ isActive }) => {
            return (
              <NavButton NavIcon={LocalLibrarySharpIcon} ariaLabel="plant class" isActive={isActive} />
            )
          }}
        </NavLink>
        <NavLink to="/registration">
          {({ isActive }) => {
            return (
              <NavButton NavIcon={LockResetSharpIcon} ariaLabel="registration" isActive={isActive} />
            )
          }}
        </NavLink>
      </div>
    </div >
  )
}
