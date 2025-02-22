import { FaArrowLeft } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

function PostDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate function
  const post = location.state?.post;//retrieve the post object
  const [like,setLike] = useState(false);

  if (!post) {
    return <p>Post not found</p>;
  }
  return (
    <div className="bg-[#DCDCDC] w-150  mx-auto my-25">
      <div className="bg-[#ffee8c] w-full h-half p-4 flex flex-col">
        <span className="p-4 text-[#00171F] flex items-center" onClick={() => navigate(-1)}><FaArrowLeft size={23} /></span>
        <h1 className="py-4 mx-4 text-[#00171F] text-5xl font-bold flex justify-center items-center ">{post.title}</h1>
      </div>
      <div className="bg-[#BFBA99]  p-4 flex flex-col">
        <p className="text-justify text-[#00171F] mx-4 mt-9 text-xl" >{post.body}</p>
        {
          like ? 
        <span onClick={()=>{setLike(!like)}} className="mt-2 mx-4 cursor-pointer text-[#E0115F] active:animate-bounce transition-all duration-150"><IoMdHeart size={29} /></span>
          :
        <span onClick={()=>{setLike(!like)}} className="mt-2 mx-4 cursor-pointer text-[#E0115F] active:animate-bounce transition-all duration-150"><IoMdHeartEmpty size={29} /></span>
        }
        
        
      </div>
    </div>
  )
}

export default PostDetailsPage