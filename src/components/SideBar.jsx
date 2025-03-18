 import { NavLink } from "react-router-dom"
function SideBar() {
  return (
    <div>
        <NavLink>
            <span>Dashboard</span>
        </NavLink>
        <NavLink>
            <span>Posts</span>
        </NavLink>
    </div>
  )
}

export default SideBar