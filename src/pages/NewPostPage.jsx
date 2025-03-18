 import {useState}from 'react';
 
function NewPostsPage() {
   const [postdata,setPostData]=useState({
    title:"",
    description:""
   })

   const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(postdata)
   }
  return (
    <div className='p-6 flex flex-col'>
      <span className='text-2xl text-left font-bold mx-4'>Create New Post</span>
      <div className="flex flex-wrap justify-center items-center">

        <form className= 'flex flex-col text-left bg-[#BADA55]' onSubmit={handleSubmit}>
        <label className='flex flex-col' htmlFor="title">Title
          <input className='border' id='title' type="text" />
         </label>
         <label className='flex flex-col text-left' htmlFor="description">Desctiption
          <input className='border'  id='description' type="text" />
         </label>
        </form>
         
      </div>
    </div>
    
  )
}

export default NewPostsPage