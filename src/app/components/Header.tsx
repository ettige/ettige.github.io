import React from 'react'

export const Header = () => {
  return (
    <header className='z-10 header sticky top-0 m-2 rounded-lg border-neutral-300 border'>
      <div className="navbar">
        <div className="flex-none block md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">محمد لطیفی</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li> <a href="#contact">ارتباط</a></li>
            <li> <a href="#about">درباره</a></li>
            <li> <a href="#skills">مهارت ها</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
