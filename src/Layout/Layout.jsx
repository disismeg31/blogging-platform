import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Layout() {
  return (
     <div className='flex   h-screen'>
        <aside className=' bg-[#fbfbfe] p-5 w-50 h-screen  border-r border-[#d1d1d1]  text-[#050315]'>SideBar</aside>
         <div className=" flex flex-col flex-1">
         <header className='bg-[#fbfbfe] text-[#050315]  border-b border-[#d1d1d1] p-5 text-center w-full h-[70px]'><Header/></header>
         <main className='bg-[#fbfbfe] text-[#050315] p-5 text-center flex-1 w-full flex flex-col h-[calc(100vh-140px)] overflow-y-auto'><Outlet/></main>
         <footer className='bg-[#fbfbfe] text-[#050315]  border-t border-[#d1d1d1] p-5 text-center w-full h-[70px]'><Footer/></footer>
         </div>
        </div>
  )
}

export default Layout