  
function Layout() {
  return (
     <div className='flex   h-screen'>
        <aside className=' bg-[#f4f4f4] p-5 w-50 h-screen  text-[#333]'>SideBar</aside>
         <div className=" flex flex-col flex-1">
         <header className='bg-[#333] text-[#eee] p-5 text-center w-full h-[70px]'>Header</header>
         <main className='bg-[#f9f9f9] text-[#333] p-5 text-center flex-1 w-full h-[calc(100vh-140px)] '>Main content</main>
         <footer className='bg-[#333] text-[#eee] p-5 text-center w-full h-[70px]'>Footer</footer>
         </div>
        </div>
  )
}

export default Layout