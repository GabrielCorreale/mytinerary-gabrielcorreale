import { useState } from 'react'
import logo from "../../public/logo-mytinerary.png"
import { Link as LinkRouter } from 'react-router-dom'

const Nav = () => {
  let links =[
    {title: "Home", to: "/"},
    {title: "Cities", to: "Cities"}
  ]
  let [open,setOpen] = useState(false);
  return (
    <div className='nav h-20 w-full top-0 left-0 bg-white drop-shadow-lg'>
        <div className='md:flex items-center justify-between py-0 md:px-10 px-7'>
          <div className='flex items-center'>
            <img className='logo h-20 w-50 p-0 ml-5 cursor-pointer' src={logo} alt='Logo MyTinerary'/>
          </div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? "close" : "menu"} size="large"></ion-icon>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-3 pr-5 absolute md:static bg-white md:z-auto z-2 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 opacity-100 menu-shadow" : "top-[-490px] md:opacity-100 opacity-0"}`}>
            {
              links.map((link) => (<LinkRouter className='nav-links text-gray-800 text-3xl hover:text-red-400 flex md:ml-5 md:my-0 my-7' key={link.key} to={link.to}>{link.title}</LinkRouter>))
            }
            <button type="button" className="border-black hover:text-red-400 md:ml-8 md:my-0 my-7 relative flex rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <ion-icon name="person-circle-outline" style={{ fontSize: "2.5rem" }}></ion-icon>
            </button>
          </ul>
        </div>
    </div>
  )
}

export default Nav