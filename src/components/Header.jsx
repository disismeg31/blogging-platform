import { FaRegUserCircle } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function Header() {
  const {themeName,updateTheme} = useContext(ThemeContext)
  return (
    <div className={`bg-blue-200  flex justify-between items-center cursor-pointer ${themeName}`}>
      <div>
        <p>searchbar..........</p>
      </div>
      <div className="flex">
      <span className="m-1" onClick={updateTheme}>
        {
          themeName==='light'?
          (
            <IoSunny size={25} />
          )
          :
          (
            <IoMoonOutline size={25} />
          )
        }
       
       </span>
      <NavLink className="m-1">
      <FaRegUserCircle size={25} />
      </NavLink>
      </div>  
    </div>
  )
}

export default Header