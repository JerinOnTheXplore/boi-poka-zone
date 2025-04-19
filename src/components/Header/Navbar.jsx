import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to='/about'><li className='text-lg text-gray-700 font-medium'><a>Listed Books</a></li></Link>
        <Link to='/readList'><li className='text-lg text-gray-700 font-medium'><a>ReadList</a></li></Link>
        
        <li><a>Pages to Read</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl  text-gray-700 font-bold">বইপোকা 🐝🐞</a>
  </div>
  <div className="navbar-center hidden lg:flex lg:items-center">
    <ul className="menu menu-horizontal px-1">
    <Link to='/'><button className="btn btn-outline btn-accent text-lg text-gray-700 font-medium">Home</button></Link>
    <Link to='/about'><li className='text-lg text-gray-700 font-medium'><a>Listed Books</a></li></Link>
    <Link to='/readList'><li className='text-lg text-gray-700 font-medium'><a>Read List</a></li></Link>
      <li className='text-lg  font-medium text-slate-700'><a>Pages to read</a></li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-2 px-10">
  <button className="btn btn-success text-lg text-gray-700 font-medium">Sign In</button>
  <button className="btn btn-active btn-info text-lg text-gray-700 font-medium">Sign Up</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;