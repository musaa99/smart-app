import React,{useState} from 'react'

const Hamburger = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" flex  md:flex lg:hidden">
    <div
      className="HAMBURGER-ICON pt-4 space-y-2"
      onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
    >
      <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
      <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
      <span className="block h-0.5 w-8  bg-[#C4C4C4]"></span>
    </div>

    <div className={isNavOpen ? "" : "hidden"}>
      <div
        className="   top-0 right-0 px-4 py-2"
        onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
      > </div>
      {/* <ul className="MENU-LINK-MOBILE-OPEN flex text-left  flex-col  fixed  ml-2 text-black items-center text-[12px] ">
        <li className="hover:bg-[#09969F] hover:rounded my-2  ">
          <a href="/dashboard">DASHBOARD</a>
        </li>
        <li className=" hover:bg-[#09969F] hover:rounded my-2 ">
          <a href="/Users">USERS</a>
        </li>
        <li className=" hover:bg-[#09969F] hover:rounded my-2 ">
          <a href="/Features">PLACES</a>
        </li>
        <li className="hover:bg-[#09969F] hover:rounded my-2 ">
          <a href="/Faq">EVENTS</a>
        </li>
        <li className=" my-2">
          <a href="/Faq">REPORTS</a>
        </li>
      </ul> */}
    </div>
  </div>
  )
}

export default Hamburger