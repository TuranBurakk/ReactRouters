import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

export default function HomeLayout(){
    return(
        <>
         <nav>
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/blog">Blog</NavLink>
         </nav>
         <Outlet/>
        </>
       
    )
}