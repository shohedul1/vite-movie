import React from 'react';
import { mobileNavigation } from '../contants/navigtion';
import { NavLink } from 'react-router-dom';


const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16  bg-black backdrop-blur-3xl bg-opacity-40  bottom-0 fixed  w-full'>
      <div className="flex items-center justify-between h-full text-neutral-400">
        {
          mobileNavigation.map((nav, index) => {
            return (
              <NavLink
                key={nav.label + "mobilenavigation"}
                className={({ isActive }) => `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}
                to={nav.href}>
                <div className='text-2xl'>
                  {nav.icon}
                </div>
                <p className="text-sm">{nav.label}</p>

              </NavLink>
            )
          })
        }

      </div>
    </section>
  )
}

export default MobileNavigation