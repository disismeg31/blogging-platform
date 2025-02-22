/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
function Card({post}) {
  return (
    <div className="bg-[#DCDCDC]  h-64 w-70 p-6 m-4">
      <h1 className="text-[#00171F] font-extrabold text-lg my-2">{post.title}</h1>
      <p className="text-[#828282] my-1 line-clamp-3 text-justify">{post.body}</p>
       <NavLink 
       className="text-blue-600 underline"  
       to={`/post/${post.id}`}
       state={{post}}
       >Learn more</NavLink>
    </div>
  )
}

export default Card