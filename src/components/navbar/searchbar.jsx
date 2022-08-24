import React from 'react'
import logo from '../../assets/logo.svg'
const Searchbar = () => {
  return (
      <div className='flex bg-[#07939B]'>
          <div className='bg-white w-[200px]'>

          <img className='m-auto' src={logo} alt="logo" />
          </div>
    <div className='bg-[#07939B] ml-10 h-[fit-content] '>
            <form className=' p-2 w-[30%]'>   
                <label for="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                            <input type="search" placeholder='search' id="default-search" className="w-[706px] h-[52px] block p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/>
                    </div>
            </form>

        

        </div>
      </div>
  )
}

export default Searchbar