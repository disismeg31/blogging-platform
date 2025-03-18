/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
function Card({post}) {
  return (
    <div className="bg-[#ececec] flex flex-col  h-64 w-70 p-6 m-4">
      <h1 className="text-[#00171F] text-justify font-extrabold line-clamp-1 text-lg my-1">{post.title}</h1>
      <p className="text-[#828282] my-1 line-clamp-5 text-justify">{post.body}</p>
       <NavLink 
       className="text-blue-600 underline text-left mt-4"  
       to={`/home/post/${post.id}`}
       state={{post}}
       >Learn more</NavLink>
    </div>
  )
}

export default Card